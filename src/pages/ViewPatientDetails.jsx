import React, { useEffect, useState } from "react";
import axios from "../utilities/axios";
import { ReactDialogBox } from "react-js-dialog-box";
import "react-js-dialog-box/dist/index.css";
import { useNavigate, useParams } from "react-router-dom";

const ViewPatientDetails = () => {
  const [viewStudent, setViewStudent] = useState({});
  const [formData, setFormData] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const { _id } = useParams();

  // Get data by _id
  useEffect(() => {
    const getStudentData = async () => {
      try {
        const response = await axios.get(`/student/get-one/${_id}`);
        setViewStudent(response.data);
        setFormData(response.data); // Initialize formData with fetched data
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    getStudentData();
  }, [_id]);

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

  // Handle open dialog
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  // Handle close dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`/student/update/${_id}`, formData);
      // console.log(response);
      alert(response.data.message);
      closeDialog();
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
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

        <div className="flex items-center gap-2 my-4 bg-metal rounded-lg w-fit px-6 py-2 text-white font-semibold cursor-pointer">
          <button onClick={openDialog}>Edit</button>
        </div>
      </div>

      {isDialogOpen && (
        <ReactDialogBox
          closeBox={closeDialog}
          bodyBackgroundColor="white"
          bodyTextColor="black"
          headerText="Edit Details"
        >
          <form onSubmit={handleSubmit} className="p-4">
            {Object.entries(formData).map(
              ([key, value]) =>
                key !== "_id" &&
                key !== "__v" && (
                  <div key={key} className="mb-4">
                    <label className="block text-lg font-semibold">
                      {capitalizeFirstLetter(key)}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={formData[key] || ""}
                      onChange={handleInputChange}
                      className="border border-bermuda rounded-md p-2 w-full"
                    />
                  </div>
                )
            )}
            <button type="submit" className="bg-yellow p-2 rounded-md">
              Save
            </button>
          </form>
        </ReactDialogBox>
      )}
    </div>
  );
};

export default ViewPatientDetails;
