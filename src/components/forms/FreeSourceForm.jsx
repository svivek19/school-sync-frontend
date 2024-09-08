import React, { useState } from "react";
import axios from "../../utilities/axios";
import { useNavigate } from "react-router-dom";

const FreeSourceForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    sourceType: "",
    details: "",
    quantity: "",
  });
  const navigate = useNavigate();

  // State to track the selected value of the dropdown
  const [selectedSource, setSelectedSource] = useState("");

  // Handler for dropdown change
  const handleSourceChange = (event) => {
    const { value } = event.target;
    setSelectedSource(value);
    setFormData({ ...formData, sourceType: value });
  };

  // Handler for input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/freesource/create-free-source",
        formData
      );
      alert(response.statusText);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="sourceType"
            className="block text-sm font-medium text-gray-700"
          >
            Select free sourceType
          </label>
          <select
            name="sourceType"
            id="sourceType"
            value={selectedSource}
            onChange={handleSourceChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select an option</option>
            <option value="cycle">Cycle</option>
            <option value="uniform">Uniform</option>
            <option value="laptop">Laptop</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="details"
            className="block text-sm font-medium text-gray-700 uppercase"
          >
            Model
          </label>
          <input
            type="text"
            id="details"
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 uppercase border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {selectedSource === "uniform" && (
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min={0}
              max={10}
              value={formData.quantity}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-metal text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FreeSourceForm;
