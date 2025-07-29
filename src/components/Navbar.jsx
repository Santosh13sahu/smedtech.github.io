import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Make sure .active class is defined here
import "../styles/style.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src="/images/sm-logo.png" alt="SM Logo" />
        </NavLink>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/experts" className={({ isActive }) => (isActive ? "active" : "")}>
              Experts
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "active" : "")}>
              Testimonials
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
