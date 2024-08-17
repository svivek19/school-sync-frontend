import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFunction = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("data", formData);
  };

  return (
    <form
      className="w-1/3 h-1/2 bg-white p-5 flex items-center flex-col border-[1px] border-silver shadow-md rounded-md"
      onSubmit={submitForm}
    >
      <p className="h-1/3 text-3xl">Login</p>
      <div className="h-1/2 w-full gap-5 flex flex-col items-center justify-center">
        <div className="w-1/2 flex flex-col">
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleFunction}
            className="border rounded outline-yellow"
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <label htmlFor="">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleFunction}
            className="border rounded outline-yellow"
          />
        </div>
      </div>
      <div className="h-1/3 w-full flex justify-center items-center">
        <button className="bg-blue text-white px-4 py-1 rounded text-lg font-medium hover:bg-yellow duration-200">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
