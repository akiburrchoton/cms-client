import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";
import ManageCourseRow from "../Components/Other/ManageCourseRow";

function ManageCourses() {
  const { loggedinUser } = use(AuthContext);
  const userEmail = loggedinUser?.email;

  const [myCourses, setmyCourses] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/myCourses", { email: userEmail })
      .then((result) => {
        setmyCourses(result.data);
      })
      .catch((error) => console.log(error));
  }, [userEmail]);

  return (
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
              ></ManageCourseRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ManageCourses;
