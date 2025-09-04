import React from "react";
import { NavLink, useLoaderData } from "react-router";
import AllCourseCard from "../Components/Other/AllCourseCard";
import { Helmet } from "react-helmet-async";

function AllCourses() {
  const allCourses = useLoaderData();

  return (
    <>
      <Helmet>
        <title>All Courses | The Learning Loop</title>
      </Helmet>

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
      </section>
    </>
  );
}

export default AllCourses;
