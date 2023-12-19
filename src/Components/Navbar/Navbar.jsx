import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        const userEmail = user.email;
        const username = userEmail.substring(0, userEmail.indexOf("@"));
        setUserName(username);
      } else {
        // No user is signed in.
        setUserName("");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/Homepage" style={styles.link}>
          ShareText
        </Link>
      </div>
      <div style={styles.navLinks}>
        {userName ? (
          <>
            <a href="/Logout" style={styles.link}>
              Logout
            </a>
            <Link to="/Me" style={styles.profileButton}>
              {userName}
            </Link>
          </>
        ) : (
          <>
            <Link to="/Login" style={styles.link}>
              Login
            </Link>
            <Link to="/Signup" style={styles.link}>
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  profileButton: {
    padding: "8px 12px", // Adjusted padding
    textDecoration: "none",
    color: "#ecf0f1",
    backgroundColor: "#3498db",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    fontWeight: "bold",
    marginLeft: "10px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1000",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#ecf0f1",
  },
};

export default Navbar;
