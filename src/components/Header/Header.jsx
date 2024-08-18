import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] bg-white"
                    : "bg-white text-black"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/listed-books"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                    : ""
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="pages-to-read"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                    : ""
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 className="text-3xl font-bold">Book Vibe</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                  : ""
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="pages-to-read"
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] bg-white text-[#23BE0A]"
                  : ""
              }
            >
              Pages to Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#23BE0A] text-white hover:text-black">Sign in</a>
        <a className="btn bg-[#59C6D2] ml-4 text-white hover:text-black">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
