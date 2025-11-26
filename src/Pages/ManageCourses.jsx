import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import ManageCourseRow from "../Components/Other/ManageCourseRow";
import Swal from "sweetalert2";
import API from "../API/axios";
import { Helmet } from "react-helmet-async";

function ManageCourses() {
  const { loggedinUser } = use(AuthContext);
  const userEmail = loggedinUser?.email;

  const [myCourses, setmyCourses] = useState([]);

  useEffect(() => {
    API.post(
      "https://learningloopserver.vercel.app/myCourses",
      { email: userEmail },
      {
        withCredentials: true,
      }
    )
      .then((result) => {
        setmyCourses(result.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  }, [userEmail]);

  return (
    <>
      <Helmet>
        <title>Manage Courses | The Learning Loop</title>
      </Helmet>

      <section className="w-[1300px] mx-auto flex flex-col items-center text-center py-20">
        <div className="max-w-4/7 mb-10">
          <h1 className="text-4xl font-bold text-brand font-montserrat mb-10">
            My <span className="text-4xl font-bold text-orange">Courses</span>
          </h1>
        </div>

        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead className="font-montserrat text-title text-md">
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Enrollment</th>
              </tr>
            </thead>
            <tbody className="font-libre">
              {myCourses.map((myCourse) => (
                <ManageCourseRow
                  key={myCourse._id}
                  myCourse={myCourse}
                  userEmail={userEmail}
                  setmyCourses={setmyCourses}
                ></ManageCourseRow>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default ManageCourses;
