import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
  const menuItems = (
    <>
      <li>
        {" "}
        <Link title="home" to="/">
          Home
        </Link>{" "}
      </li>
      <li>
        {user?.uid ? (
          <>
            <Link to="/myreview">Myreview</Link>
            <Link to="/addservice">AddService</Link>
            <Link onClick={handleLogOut}>Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </li>
      <li>
        <Link title="blog" to="/blog">
          Blog
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-600 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 text-black shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">Traveler</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link>{user?.email ? user?.displayName : <FaUser></FaUser>}</Link>
      </div>
    </div>
  );
};

export default Header;
