import React, { useEffect, useState } from "react";
import axios from "../utilities/axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [student, setStudent] = useState([]);
  const [viewStudent, setViewStudent] = useState([]);

  // fetch all student data
  useEffect(() => {
    const getAllStudentData = async () => {
      try {
        const response = await axios.get("/student/get");
        setStudent(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllStudentData();

    return () => {};
  }, []);

  // delete student data
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/student/delete-student/${id}`);

      if (response.status === 201) {
        alert("student deleted!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-5/6 mx-auto mt-4">
      <div>
        <h1 className="text-4xl">Student Data</h1>
        {student.length > 0 ? (
          <table className="min-w-full mt-8 border border-gray-200">
            <thead>
              <tr className="bg-yellow">
                <th className="px-6 py-3 text-left uppercase tracking-wider">
                  SNo
                </th>
                <th className="px-6 py-3 text-left uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left uppercase tracking-wider">
                  Student Dob
                </th>
                <th className="px-6 py-3 text-left uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left uppercase tracking-wider">
                  Guardian Name
                </th>
                <th className="px-6 py-3 text-left uppercase tracking-wider">
                  Guardian Number
                </th>
                <th className="px-6 py-3">View</th>
                <th className="px-6 py-3">Del</th>
              </tr>
            </thead>
            <tbody>
              {student.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="px-6 py-4 whitespace-nowrap ">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {item.dob}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {item.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {item.guardianName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {item.guardianNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Link
                      to={`/admin/student/studentDetails/${item._id}`}
                      className="bg-purple text-white p-2 rounded-md text-xs font-bold"
                    >
                      View
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button
                      className="bg-bubble-gum text-white p-2 rounded-md text-xs font-bold"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>No data found!</h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
