import React from "react";
import { NavLink, useLoaderData } from "react-router";
import AllCourseCard from "../Components/Other/AllCourseCard";

function AllCourses() {
  const allCourses = useLoaderData();

  return (
    <>
      {/* All Courses Section  */}
      <section className="w-[1300px] mx-auto flex flex-col items-center text-center py-20">
        <div className="max-w-4/7 mb-10">
          <h1 className="text-4xl font-bold text-brand font-montserrat mb-10">
            All <span className="text-4xl font-bold text-orange">Courses</span>
          </h1>
        </div>
        {/* Course Cards  */}
        <div className="grid grid-cols-3 w-full">
          {allCourses.map((course) => (
            <AllCourseCard key={course._id} course={course}></AllCourseCard>
          ))}
        </div>

        {/* Register button */}
        <div className="mt-10">
          <NavLink to="/register">
            <button className="btn bg-(--color-orange) text-white font-bold rounded-full px-6">
              <span>Add Course</span>
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
      </section>
    </>
  );
}

export default AllCourses;
