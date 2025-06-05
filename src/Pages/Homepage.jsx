import React from "react";
import HomeSlider from "../Components/Other/HomeSlider";
import { NavLink } from "react-router";

function Homepage() {
  return (
    <div className="w-fulljustify-center">
      {/* Slider Section  */}
      <section className="w-11/12 mx-auto  flex flex-col items-center text-center py-20">
        <div className="max-w-4/7 mb-10">
          <p className="font-libre font-semibold text-orange mb-3">CATEGORY</p>
          <h1 className="text-4xl font-bold text-brand font-montserrat">
            Your Ideal Match Across All{" "}
            <span className="text-4xl font-bold text-orange">
              Sectors And Use Cases
            </span>
          </h1>
        </div>

        <HomeSlider></HomeSlider>

        <div className="mt-10">
          <NavLink to="/register">
            <button className="btn bg-(--color-orange) text-white font-bold rounded-full px-6">
              <span>Register</span>
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
    </div>
  );
}

export default Homepage;
