// Homepage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPresent } from "../../REST";
const Homepage = () => {
  return (
    <>
      <PostSearcher />;
      <CreatePostButton />
    </>
  );
};

const CreatePostButton = () => {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  const redirectToTextEditor = () => {
    navigate("/Texteditor");
  };

  // Styles object
  const styles = {
    createPostButtonContainer: {
      position: "fixed",
      top: "70%", // Adjusted position
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
    createPostButton: {
      padding: "30px 60px",
      fontSize: "28px",
      backgroundColor: "#4caf50" /* Green */,
      color: "#fff",
      border: "none",
      borderRadius: "15px",
      cursor: "pointer",
      transition:
        "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)", // Add a subtle box-shadow
    },
    // Hover effect
    createPostButtonHover: {
      backgroundColor: "#45a049" /* Darker green on hover */,
      transform: "scale(1.05)", // Slightly larger on hover
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.2)", // Enhance box-shadow on hover
    },
    // Press effect
    createPostButtonPress: {
      transform: "scale(0.95)", // Slightly smaller on press
      boxShadow: "none", // Remove box-shadow on press
    },
  };

  return (
    <div style={styles.createPostButtonContainer}>
      <button
        style={{
          ...styles.createPostButton,
          ...(isPressed
            ? styles.createPostButtonPress
            : styles.createPostButtonHover),
        }}
        onClick={redirectToTextEditor}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        Create Post
      </button>
    </div>
  );
};

const PostSearcher = () => {
  const [postName, setPostName] = useState("");
  const navigate = useNavigate();

  const handleViewPost = () => {
    postPresent(postName).then(() => {
      navigate(`/viewpost/${postName}`);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleViewPost();
    }
  };

  return (
    <div style={styles.container}>
      <h2>View Post</h2>
      <input
        type="text"
        style={styles.postNameInput}
        placeholder="Enter Post Name"
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      {/* View Post button */}
      <button style={styles.viewPostButton} onClick={handleViewPost}>
        View Post
      </button>
    </div>
  );
};
const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  postNameInput: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    boxSizing: "border-box",
  },
  viewPostButton: {
    width: "100%",
    padding: "12px",
    fontSize: "18px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Homepage;
