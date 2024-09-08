import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa6";
import { AiTwotoneSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <div>
      <div className="flex justify-around flex-wrap items-center h-screen">
        <Link
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer hover:scale-110 duration-300"
          to={"/admin/student/student-registration"}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            New Student
          </h5>
          <div className="flex justify-center">
            <IoDocumentTextOutline size={40} />
          </div>
        </Link>
        <Link
          to={"/admin/student/free-sources"}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer hover:scale-110 duration-300"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Free sources
          </h5>
          <div className="flex justify-center">
            <FaBoxOpen size={40} />
          </div>
        </Link>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer hover:scale-110 duration-300">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Attandence
          </h5>
          <div className="flex justify-center">
            <AiTwotoneSchedule size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
