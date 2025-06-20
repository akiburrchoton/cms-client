import React from "react";
import { NavLink } from "react-router";

function AllCourseCard({ course }) {
  const {
    _id,
    courseTitle,
    courseDescription,
    coverPicture,
    createdAtDisplay,
  } = course;

  return (
    <div className="card bg-base-100 w-96">
      <figure>
        <img
          src={coverPicture}
          alt=""
          className="w-full h-70 rounded-2xl object-cover object-center"
        />
      </figure>
      <div className="card-body px-0 text-left">
        <h2 className="card-title font-montserrat font-bold text-2xl text-title">
          {courseTitle}
        </h2>
        <p className="font-libre text-mainText text-[16px] pb-6">
          {courseDescription}
        </p>

        <p className="font-libre text-brand/70 text-[16px] font-semibold pb-6 border-b-2 border-orange/50 mb-5">
          Course Added: {createdAtDisplay}
        </p>
        {/* Button  */}
        <div className="w-full">
          <NavLink to={`/course/${_id}`}>
            <button className="btn bg-(--color-orange) text-white font-bold rounded-full font-libre text-[16px] py-6 w-full">
              <span>Course Details</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AllCourseCard;
