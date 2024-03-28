import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
    fontWeight: "bold",
  };

  const headerStyle = {
    backgroundColor: "#333",
    padding: "10px 0",
  };

  return (
    <div>
      <header className="bg-gray-900 text-white p-4">
        <nav className=" flex justify-between items-center px-8">
          <div className=" text-2xl font-bold"> My Website</div>
          <ul className=" flex space-x-6">
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/profile" className="hover:text-gray-300">
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
