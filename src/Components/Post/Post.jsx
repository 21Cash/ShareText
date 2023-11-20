import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Post = () => {
  const [postName, setPostName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleViewPost = () => {
    // Navigate to the "/posts/FIELDTEXT" route
    navigate(`/posts/${postName}`);
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Enter Post Name To View:</label>
      <input
        type="text"
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleViewPost} style={styles.button}>
        View
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
  },
  label: {
    marginBottom: "10px",
    fontSize: "16px",
  },
  input: {
    padding: "5px",
    marginBottom: "10px",
    fontSize: "14px",
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Post;
