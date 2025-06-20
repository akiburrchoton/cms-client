import React, { use, useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Loading from "../Components/Common/Loading";

function CourseDetail() {
  const { loggedinUser, loading } = use(AuthContext);
  const [isClicked, setIsClicked] = useState(false);

  const {
    courseTitle,
    courseDescription,
    coverPicture,
    courseDuration,
    userName,
    numberofEnrolment,
  } = useLoaderData();

  const handleEnrollClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      {/* All Courses Section  */}
      {loading ? (
        <Loading></Loading>
      ) : (
        <section className="w-11/12 mx-auto flex flex-col items-center text-center py-20 ">
          <img
            src={coverPicture}
            alt=""
            className="w-full h-120 object-cover object-center rounded-t-3xl"
          />

          <div className="w-full mb-10 bg-gray-100 text-left p-10 grid grid-cols-8 gap-4 ">
            <div className="col-span-1 flex flex-col gap-3 items-center text-lg font-semibold border-r-1 pr-7">
              <img src="https://i.ibb.co/KzLL17Rc/user.png" alt="" />
              <p className="text-center">{userName}</p>
            </div>

            <div className="col-span-6 font-libre pl-5 ">
              <h1 className="text-3xl font-bold text-brand font-montserrat mb-5">
                {courseTitle}
              </h1>

              <p className="col-span-1">{courseDescription}</p>

              <div className="flex justify-between my-5">
                <p className="pr-8  border-r-2 flex justify-center items-center gap-2 font-semibold">
                  <img
                    src="https://i.ibb.co/6R0fZjq1/time.png"
                    alt=""
                    width={30}
                  />
                  {courseDuration}
                </p>
                <p className="pr-8 border-r-2 flex items-center gap-2 font-semibold">
                  <img
                    src="https://i.ibb.co/bM1pHRSC/curiculum.png"
                    alt=""
                    width={30}
                  />
                  3 Curriculum
                </p>
                <p className="pr-8 border-r-2 flex items-center gap-2 font-semibold">
                  <img
                    src="https://i.ibb.co/5XWT0vtJ/enrolled.png"
                    alt=""
                    width={30}
                  />
                  Enrolled {numberofEnrolment}
                </p>
                <p className="pr-8 border-r-2 flex items-center gap-2 font-semibold">
                  <img
                    src="https://i.ibb.co/KZjw7Pp/category.png"
                    alt=""
                    width={30}
                  />
                  Category
                </p>
                <p className="pr-8 border-r-2 flex items-center gap-2 font-semibold">
                  <img
                    src="https://i.ibb.co/ZzKQ7PQs/lesson.png"
                    alt=""
                    width={30}
                  />
                  Lesson 5
                </p>
                <p className="pr-8 flex items-center gap-2 font-semibold">
                  <img
                    src="https://i.ibb.co/3m8tN0S1/quiz.png"
                    alt=""
                    width={30}
                  />
                  Quiz 5
                </p>
              </div>

              {!loggedinUser ? (
                <p className="font-semibold text-red-400">
                  Please sign in to enroll the course.
                </p>
              ) : (
                ""
              )}
            </div>

            <div>
              {/* <NavLink to="/register"> */}
              <button
                onClick={handleEnrollClick}
                className={
                  loggedinUser
                    ? "btn bg-(--color-orange) text-white font-bold rounded-full px-6"
                    : "font-bold rounded-full px-6 bg-gray-300 text-gray-500  cursor-not-allowed flex items-center py-2"
                }
                disabled={!loggedinUser}
              >
                {isClicked ? <span>Enrolled</span> : <span>Enroll</span>}

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
              {/* </NavLink> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CourseDetail;
