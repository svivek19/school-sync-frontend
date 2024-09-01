import React, { useEffect, useState } from "react";
import axios from "../utilities/axios";
import { useParams } from "react-router-dom";

const ViewPatientDetails = () => {
  const [viewStudent, setViewStudent] = useState([]);

  const { _id } = useParams();

  // get data by _id
  useEffect(() => {
    const getStudentData = async () => {
      try {
        const response = await axios.get(`/student/get-one/${_id}`);
        setViewStudent(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getStudentData();
  }, []);

  // Helper function to capitalize the first letter of each word
  const capitalizeFirstLetter = (string) => {
    return (
      string.charAt(0).toUpperCase() +
      string
        .slice(1)
        .replace(/([A-Z])/g, " $1")
        .trim()
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {Object.keys(viewStudent).length > 0 ? (
        <table className="border-2 border-bubble-gum">
          <thead>
            <tr>
              <th colSpan={2} className="border-2 border-bubble-gum text-2xl">
                Data
              </th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(viewStudent)
              .filter(([key]) => key !== "_id" && key !== "__v")
              .map(([key, value]) => (
                <tr key={key} className="border-2 border-bubble-gum">
                  <td className="border-2 border-bubble-gum text-xl p-2">
                    {capitalizeFirstLetter(key)}
                  </td>
                  <td className="text-lg capitalize px-4">{value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <h1>No data found!</h1>
      )}
    </div>
  );
};

export default ViewPatientDetails;
