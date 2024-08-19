import React from "react";

const Dashboard = () => {
  return (
    <div className="w-5/6 mx-auto mt-4">
      <div>
        <h1 className="text-4xl">Student Data</h1>
        <table>
          <th>SNo</th>
          <th>Student Name</th>
          <th>Student Dob</th>
          <th></th>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
