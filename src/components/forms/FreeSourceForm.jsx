import React, { useState } from "react";

const FreeSourceForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    source: "",
    model: "",
    quantity: "",
  });

  // State to track the selected value of the dropdown
  const [selectedSource, setSelectedSource] = useState("");

  // Handler for dropdown change
  const handleSourceChange = (event) => {
    const { value } = event.target;
    setSelectedSource(value);
    setFormData({ ...formData, source: value });
  };

  // Handler for input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="source"
            className="block text-sm font-medium text-gray-700"
          >
            Select free source
          </label>
          <select
            name="source"
            id="source"
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
            htmlFor="model"
            className="block text-sm font-medium text-gray-700 uppercase"
          >
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
