import React, { use, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import API from "../API/axios";
import { Helmet } from "react-helmet-async";

function RegisterPage() {
  const { createUser, logoutUser, setloggedinUser } = use(AuthContext);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Register
  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const { name, email, photoURL, password1, password2 } = Object.fromEntries(
      formData.entries()
    );
    // console.log(name, email, photoURL, password1, password2);

    //  Check Password Confirmation
    if (password1 !== password2) {
      setErrors("Password didn't match!");
      return;
    } else {
      setErrors(""); // no errors
    }

    // For Backend
    const userProfileInfo = {
      name,
      email,
      photoURL,
    };

    // Register User
    createUser(email, password1).then((result) => {
      setloggedinUser(result.user);
      console.log("Registration Completed!");

      updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL,
      });

      // Storing user profile information in the database by using the API
      API.post(
        "https://cms-server-side-theta.vercel.app/users",
        userProfileInfo
      )
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Registration successful !",
              icon: "success",
              draggable: true,
            });

            navigate("/login");
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registration Unsuccessful !",
          });
        });

      logoutUser()
        .then(() => {
          // console.log("Logout Successful");
          navigate("/login");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    });

    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | The Learning Loop</title>
      </Helmet>

      <section className="w-full flex items-center justify-around">
        <div className="w-1/2 px-[13%] flex flex-col justify-center">
          <div className="mb-4">
            <h1 className="text-6xl font-bold font-montserrat text-title mb-5">
              Register
            </h1>
            <p className="font-libre text-mainText">
              Already have an account?{" "}
              <NavLink to="/login">
                <span className="ml-2 text-orange font-bold">Sign in</span>
              </NavLink>
            </p>
          </div>
          <form onSubmit={handleRegister} className="fieldset">
            <fieldset className="fieldset font-libre mb-3">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                Name
              </legend>
              <input
                type="text"
                name="name"
                className="input w-full rounded-xl border-brand/25 border-2"
                placeholder="Eg. Akibur Rahman Choton"
              />
            </fieldset>

            <fieldset className="fieldset font-libre mb-3">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                Email
              </legend>
              <input
                type="email"
                name="email"
                className="input w-full rounded-xl border-brand/25 border-2"
                required
                placeholder="example@gamil.com"
              />
            </fieldset>

            <fieldset className="fieldset font-libre mb-3">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                PhotoURL
              </legend>
              <input
                name="photoURL"
                type="text"
                className="input w-full rounded-xl border-brand/25 border-2"
                placeholder="www.photo.com/image-1.jpg"
              />
            </fieldset>

            <fieldset className="fieldset font-libre mb-3">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                Password
              </legend>
              <input
                name="password1"
                type="password"
                className="input w-full rounded-xl border-brand/25 border-2 validator "
                required
                minlength="8"
                placeholder="********"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number
                <br />
                At least one lowercase letter
                <br />
                At least one uppercase letter
              </p>
            </fieldset>

            <fieldset className="fieldset font-libre mb-3">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                Confirm Password
              </legend>
              <input
                type="password"
                name="password2"
                className="input w-full rounded-xl border-brand/25 border-2"
                required
                minlength="8"
                placeholder="********"
              />
            </fieldset>

            {errors && (
              <p className="text-red-500 text-sm text-left">{errors}</p>
            )}

            <button className="btn bg-brand text-white font-semibold rounded-xl px-6 w-full font-montserrat py-5 mt-8">
              Register
            </button>
          </form>
        </div>

        {/* Right Section  */}
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/gLDrqsv3/banner-img-1.jpg"
            alt=""
            className="w-full h-[950px] object-cover object-center"
          />
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
