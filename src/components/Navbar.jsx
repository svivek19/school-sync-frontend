import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const naviagte = useNavigate();
  const adminRoute = [
    { title: "Dashboard", route: "/dashboard" },
    { title: "Student", route: "/student" },
  ];

  //   Logout function
  const handleLogout = () => {
    naviagte("/");
  };

  const hiddenRoute = ["/"];

  const shouldShowNavbar = !hiddenRoute.includes(location.pathname);

  return (
    <nav>
      {shouldShowNavbar && (
        <div className="bg-sky-600 py-6 flex flex-row justify-between text-white">
          <div className="text-3xl px-5 flex items-center">
            <h1>SchoolSync</h1>
          </div>

          <div className="flex px-4">
            <ul className="flex flex-row gap-6 items-center text-2xl">
              {adminRoute.map((item, i) => (
                <Link to={item.route} key={i}>
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>

          <div className="mx-5 flex items-center text-xl">
            <button
              className="px-6 py-3 rounded-md bg-red-500 font-medium"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
