import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center gap-[30px]  font-bold mb-4 border-b pb-3">
      <NavLink
        className={(e) =>
          e.isActive ? "text-red-400 underline " : "text-white"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-400" : "text-white")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-400" : "text-white")}
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-400" : "text-white")}
        to="/create-recepies"
      >
        Create Recepies
      </NavLink>
    </div>
  );
}

export default Navbar;
