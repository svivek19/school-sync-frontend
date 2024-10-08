import React, { useState } from "react";
import axios from "../../utilities/axios";
import { useNavigate } from "react-router-dom";

const NewStudentRegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    guardianName: "",
    guardianNumber: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/student/add-student", formData);

      if (response.status === 201) {
        alert("Student data created!");
        navigate(-1);
      }
    } catch (error) {
      alert("See console");
      console.log(error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto h-screen mt-20">
      <h2 className="text-xl font-bold mb-4">New Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="guardianName"
            className="block text-sm font-medium text-gray-700"
          >
            Guardian Name
          </label>
          <input
            type="text"
            id="guardianName"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="guardianNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Guardian Number
          </label>
          <input
            type="number"
            id="guardianNumber"
            name="guardianNumber"
            value={formData.guardianNumber}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default NewStudentRegisterForm;
