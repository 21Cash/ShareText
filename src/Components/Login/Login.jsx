import React, { useState } from "react";
import { signInUser } from "../../UserAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userEmail = email + "@gmail.com";
    signInUser(userEmail, password).then(() => {
      navigate("/");
    });
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>
        <form style={styles.form} onSubmit={handleLogin}>
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

          <button type="submit" style={styles.button}>
            Login
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
    padding: "30px 60px 40px 60px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    margin: "auto",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "white",
    marginTop: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    color: "white",
  },
  input: {
    padding: "8px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default Login;
