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
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
  },
  link: {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#fff",
  },
};

export default Navbar;
