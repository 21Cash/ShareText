import React, { useState } from "react";
import { signUpUser } from "../../UserAuth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const userEmail = email + "@gmail.com"; // Converting Username To Email Address
    signUpUser(userEmail, password).then(() => {
      navigate("/");
    });
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Signup</h2>
        <form style={styles.form}>
          <label style={styles.label} htmlFor="email">
            Username:
          </label>
          <input
            type="text"
            id="email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label style={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" style={styles.button} onClick={handleSignup}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  background: {
    height: "75vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  container: {
    backgroundColor: "#1a252f",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "30px 60px 40px 60px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    margin: "auto", // Center horizontally
  },
  heading: {
    color: "White",
    textAlign: "center",
    marginTop: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    color: "White",
  },
  input: {
    padding: "8px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  button: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default Signup;
