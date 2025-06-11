import React from "react";
import { NavLink } from "react-router";

function RegisterPage() {
  return (
    <>
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
          <form>
            <fieldset className="fieldset font-libre mb-3">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                Name
              </legend>
              <input
                type="text"
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
                className="input w-full rounded-xl border-brand/25 border-2"
                placeholder="example@gamil.com"
              />
            </fieldset>

            <fieldset className="fieldset font-libre mb-3">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                PhotoURL
              </legend>
              <input
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
                type="password"
                className="input w-full rounded-xl border-brand/25 border-2"
                placeholder="********"
              />
            </fieldset>

            <fieldset className="fieldset font-libre mb-8">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                Confirm Password
              </legend>
              <input
                type="password"
                className="input w-full rounded-xl border-brand/25 border-2"
                placeholder="********"
              />
            </fieldset>

            <button className="btn bg-brand text-white font-semibold rounded-xl px-6 w-full font-montserrat py-5">
              Register
            </button>
          </form>
        </div>

        {/* Right Section  */}
        <div className="w-1/2">
          <img
            src="src/assets/banner-img-2.jpg"
            alt=""
            className="w-full h-[950px] object-cover object-center"
          />
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
