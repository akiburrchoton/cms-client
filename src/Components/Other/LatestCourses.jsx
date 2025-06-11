import React from "react";
import { NavLink } from "react-router";

function LatestCourses() {
  return (
    <>
      {/* Slider Section  */}
      <section className="w-[1300px] mx-auto flex flex-col items-center text-center py-20">
        <div className="max-w-4/7 mb-10">
          <h1 className="text-4xl font-bold text-brand font-montserrat mb-10">
            Our Latest{" "}
            <span className="text-4xl font-bold text-orange">Courses</span>
          </h1>
        </div>

        {/* Course Cards  */}
        <div className="grid grid-cols-3 w-full">
          <div className="card bg-base-100 w-96">
            <figure>
              <img
                src="src/assets/banner-img-2.jpg"
                alt="Shoes"
                className="w-full h-70 rounded-2xl object-cover object-center"
              />
            </figure>
            <div className="card-body px-0 text-left">
              <h2 className="card-title font-montserrat font-bold text-2xl text-title">
                Card Title
              </h2>
              <p className="font-libre text-mainText text-[16px] pb-6">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>

              <p className="font-libre text-brand/70 text-[16px] font-semibold pb-6 border-b-2 border-orange/50 mb-5">
                Course Added: 11/02/2025
              </p>
              {/* Button  */}
              <div className="w-full">
                <NavLink to="/register">
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
          <div>2</div>
          <div>3</div>
        </div>

        <div className="mt-10">
          <NavLink to="/register">
            <button className="btn bg-(--color-orange) text-white font-bold rounded-full px-6">
              <span>All Courses</span>
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

export default LatestCourses;
