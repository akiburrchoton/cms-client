import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import API from "../API/axios";

function EditCourse() {
  const { id } = useParams();
  const formRef = useRef();
  const navigate = useNavigate();
  const [courseDetails, setCourseDetails] = useState();

  useEffect(() => {
    API.get(`https://learningloopserver.vercel.app/course/${id}`)
      .then((response) => {
        setCourseDetails(response.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const updatedCourseDetails = Object.fromEntries(formData.entries());

    API.patch(
      `https://learningloopserver.vercel.app/updateCourse/${id}`,
      updatedCourseDetails
    )
      .then((response) => {
        if (response.data.matchedCount === 1) {
          Swal.fire({
            title: "Course updated successfully!",
            icon: "success",
            draggable: true,
          });

          navigate("/manage-courses");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Course couldn't be updated!",
        });
      });
  };

  return (
    <section className="w-full flex items-center justify-around py-25">
      <div className="w-1/2 flex flex-col justify-center">
        <div className="mb-4">
          <div className=" mb-10">
            <h1 className="text-4xl font-bold text-brand font-montserrat mb-10 text-center">
              Edit
              <span className="text-4xl font-bold text-orange"> Course </span>
              Detail
            </h1>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
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
              defaultValue={courseDetails?.courseTitle}
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
              defaultValue={courseDetails?.courseDescription}
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
              defaultValue={courseDetails?.coverPicture}
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
              defaultValue={courseDetails?.courseDuration}
            />
          </fieldset>

          <fieldset>
            <button
              type="submit"
              className="btn bg-brand text-white font-semibold rounded-xl px-6 w-full font-montserrat py-5"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default EditCourse;
