import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [loggedinUser, setloggedinUser] = useState(false);
  return (
    <>
      <div className="bg-base-200 w-full shadow-md/6 font-libre">
        <div className="navbar w-11/12 mx-auto py-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="uppercase menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>

                <li>
                  <NavLink to="/addcourse">Add Course</NavLink>
                </li>

                <li>
                  <NavLink to="/managecourses">Manage Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/enrolledcourses">Enrolled Courses</NavLink>
                </li>
              </ul>
            </div>
            <a className="text-xl font-montserrat font-bold text-[25px]">
              <span className="text-brand">The Learning</span>{" "}
              <span className="text-orange">Loop</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-[16px] text-mainText">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>

              <li>
                <NavLink to="/addcourse">Add Course</NavLink>
              </li>

              <li>
                <NavLink to="/managecourses">Manage Courses</NavLink>
              </li>
              <li>
                <NavLink to="/enrolledcourses">Enrolled Courses</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {/* start */}

            {loggedinUser ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={loggedinUser.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>{loggedinUser.displayName}</a>
                  </li>
                  <li>
                    <button
                      // onClick={handleLogout}
                      className="btn btn-outline btn-error mt-3"
                    >
                      <NavLink to="/login">Logout</NavLink>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="w-full flex items-center justify-end">
                <NavLink to="/login">
                  <button className="flex text-title mr-4 font-semibold hover:text-orange p-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span>Log In</span>
                  </button>
                </NavLink>
                
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
            )}

            {/* end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
