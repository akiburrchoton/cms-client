import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 font-libre">
      <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* First Column: Logo and Slogan */}
        <div className="col-span-2 md:col-span-2">
          <div className="mb-4">
            <p className="text-4xl text-brand capitalize font-semibold font-montserrat ">
              We educate online to{" "}
              <span className="text-orange font-bold">
                Gaining skills and knowledge
              </span>{" "}
              through electronic device
            </p>
          </div>
          <p className="text-gray-600 mb-5 mr-15">
            Empowering you to acquire vital skills and knowledge, our platform
            delivers comprehensive online education directly to your electronic
            device. Learn at your own pace, anywhere, anytime, and unlock your
            full potential.
          </p>
          <NavLink to="/">
            <button className="btn bg-(--color-orange) text-white font-bold rounded-full px-6 ml-[-2px]">
              <span>Explore Courses</span>
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

        {/* Second Column: Contact Us */}
        <div className="col-span-1 md:col-span-1 mt-8 md:mt-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>6/39 Fourth Avenue</li>
            <li>Campsie, Sydney 2194</li>
            <li className="pt-2">+61 406 579 364</li>
          </ul>
        </div>

        {/* Third Column: Quick Links */}
        <div className="col-span-1 md:col-span-1 mt-8 md:mt-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="">
                Course
              </a>
            </li>
            <li>
              <a href="#" className="">
                Add Course
              </a>
            </li>
            <li>
              <a href="#" className="">
                Manage Courses
              </a>
            </li>
            <li>
              <a href="#" className="">
                Enrolled Courses
              </a>
            </li>
            <li>
              <a href="#" className="">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Spacer column if needed for larger screens to align better */}
        <div className="hidden lg:block col-span-1"></div>
      </div>

      {/* Copyright/Footer Bottom */}
      <div className="max-w-11/12 mx-auto py-5 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        <div className="mb-4 sm:mb-0">
          <a className="font-montserrat font-bold text-[19px] ">
            <span className="text-brand">The Learning</span>{" "}
            <span className="text-orange ">Loop</span>
          </a>
        </div>
        <p>© {new Date().getFullYear()}. Created by WeDesignTech</p>
      </div>
    </footer>
  );
};

export default Footer;
