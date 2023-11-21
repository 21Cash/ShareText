// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>
        {" "}
        <Link to="/Homepage" style={styles.link}>
          ShareText
        </Link>
      </div>
      <div style={styles.navLinks}>
        <a href="/Logout" style={styles.link}>
          Logout
        </a>
        <Link to="/Login" style={styles.link}>
          Login
        </Link>
        <a href="/Signup" style={styles.link}>
          Signup
        </a>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#2c3e50", // Change background color
    color: "#ecf0f1", // Change text color
    position: "fixed", // Fix the position at the top
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1000",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0", // Remove margin
  },
  navLinks: {
    display: "flex",
  },
  link: {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#ecf0f1", // Change link color
  },
};

export default Navbar;
