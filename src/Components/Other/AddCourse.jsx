import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { getFormattedDate } from "../../Utils/dateFormatter";
import axios from "axios";

function AddCourse() {
  const { loggedinUser } = use(AuthContext);
  const now = new Date();
  const formattedDateForDisplay = getFormattedDate(now);

  const handleAddCourse = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { courseTitle, courseDescription, coverPicture, courseDuration } =
      Object.fromEntries(formData.entries());

    const courseInformation = {
      courseTitle,
      courseDescription,
      coverPicture,
      courseDuration,
      numberofEnrolment: "0",
      userEmail: loggedinUser?.email,
      userName: loggedinUser?.displayName,
      createdAtDisplay: formattedDateForDisplay, // For displaying to users
      createdAt: now.toISOString(), // ISO string for Backend
    };

    // Store in Databse
    axios
      .post("http://localhost:3000/addcourse", courseInformation)
      .then((result) => {
        if (result.data.insertedId) {
          console.log(result.data);
        }
      })
      .catch((error) => console.log(error));

    e.target.reset();
  };
  return (
    <>
      <section className="w-full flex items-center justify-around">
        <div className="w-1/2 px-[13%] flex flex-col justify-center">
          <div className="mb-4">
            <h1 className="text-4xl font-bold font-montserrat text-title mb-5">
              Add a new course
            </h1>
          </div>
          <form onSubmit={handleAddCourse}>
            <fieldset className="fieldset font-libre mb-4">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                Course Title
              </legend>
              <input
                type="text"
                name="courseTitle"
                className="input w-full rounded-xl border-brand/25 border-2"
                placeholder="eg. Fundamentals of Software Development"
                required
              />
            </fieldset>

            <fieldset className="fieldset font-libre mb-4">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                Course Description
              </legend>

              <textarea
                type="text"
                name="courseDescription"
                className="block w-full rounded-xl border-brand/25 border-2 h-25 p-3 max-w-full text-[14px]"
                placeholder="Course Description"
                required
              ></textarea>
            </fieldset>

            <fieldset className="fieldset font-libre mb-4">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                Course Cover Picture (URL)
              </legend>
              <input
                type="text"
                name="coverPicture"
                className="input w-full rounded-xl border-brand/25 border-2"
                placeholder="eg. www.example.com/cover-pic"
                required
              />
            </fieldset>

            <fieldset className="fieldset font-libre mb-10">
              <legend className="fieldset-legend font-montserrat text-[16px]">
                Course Duration (in week)
              </legend>
              <input
                type="text"
                name="courseDuration"
                className="input w-full rounded-xl border-brand/25 border-2"
                placeholder="eg. 3 Weeks"
                required
              />
            </fieldset>

            <button className="btn bg-brand text-white font-semibold rounded-xl px-6 w-full font-montserrat py-5">
              Add Course
            </button>
          </form>
        </div>

        {/* Right Section  */}
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/gLDrqsv3/banner-img-1.jpg"
            alt=""
            className="w-full h-screen object-cover object-center"
          />
        </div>
      </section>
    </>
  );
}

export default AddCourse;
