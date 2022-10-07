import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  // const navStyles = ({ isActive }) => {
  //   return {
  //     borderBottom: isActive ? "2px solid rgb(255, 254, 254)" : "",
  //     PointerEvents: isActive ? "none" : "all",
  //   };
  // };
  const [open, setIsOpen] = useState(false);
  return (
    <header>
      <nav>
        <img src="/assets/shared/logo.svg" alt="logo" />
        <ul>
          <li>
            <NavLink end to="/" className="nav-btn">
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className="nav-btn">
              <span>01</span> Destinations
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className="nav-btn">
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className="nav-btn">
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
        <div
          className={`burger ${open && "close"}`}
          onClick={() => setIsOpen(!open)}
        ></div>
      </nav>
      {open && (
        <div className="sideNav">
          <ul>
            <li>
              <NavLink end to="/" className="nav-btn">
                <span>00</span> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination" className="nav-btn">
                <span>01</span> Destinations
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew" className="nav-btn">
                <span>02</span> Crew
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className="nav-btn">
                <span>03</span> Technology
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
