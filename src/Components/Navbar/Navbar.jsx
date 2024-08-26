import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const styles = {
  navbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    height: "25px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottom: "1px solid #f0f0f0",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
    textDecoration: "none",
    color: "#ecf0f1",
    transition: "color 0.3s ease",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
  },
  profileButton: {
    padding: "5px 15px",
    textDecoration: "none",
    color: "#ecf0f1",
    fontSize: "15px",
    backgroundColor: "#3498db",
    borderRadius: "5px",
    transition: "background-color 0.3s ease, color 0.3s ease",
    marginLeft: "10px",
  },
  linkStyled: {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#ecf0f1",
    transition: "color 0.3s ease",
  },
};

const Navbar = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        const userEmail = user.email;
        const username = userEmail.substring(0, userEmail.indexOf("@"));
        const capitalizedUsername =
          username.charAt(0).toUpperCase() + username.slice(1);
        setUserName(capitalizedUsername);
      } else {
        // No user is signed in.
        setUserName("");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={styles.navbarContainer}>
      <Link
        to=""
        style={styles.logo}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#5dade2")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#ecf0f1")}
      >
        ShareText
      </Link>
      <div style={styles.navLinks}>
        {userName ? (
          <>
            <a
              href="/Logout"
              style={{
                ...styles.linkStyled,
                color: "#ecf0f1",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5dade2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ecf0f1")}
            >
              Logout
            </a>
            <Link
              to="/Me"
              style={{
                ...styles.profileButton,
                backgroundColor: "#3498db",
                color: "#ecf0f1",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2980b9";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3498db";
                e.currentTarget.style.color = "#ecf0f1";
              }}
            >
              {userName}
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/Login"
              style={styles.linkStyled}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5dade2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ecf0f1")}
            >
              Login
            </Link>
            <Link
              to="/Signup"
              style={styles.linkStyled}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5dade2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ecf0f1")}
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
