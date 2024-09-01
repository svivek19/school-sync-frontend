import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Student from "./pages/Student";
import NewStudentRegisterForm from "./components/forms/NewStudentRegisterForm";
import ViewPatientDetails from "./pages/ViewPatientDetails";

const App = () => {
  return (
    <div className="bg-gray">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/student" element={<Student />} />
          <Route
            path="/admin/student/student-registration"
            element={<NewStudentRegisterForm />}
          />
          <Route
            path="/admin/student/studentDetails/:_id"
            element={<ViewPatientDetails />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
