import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postPresent } from "../../REST";

const Homepage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PostSearcher />
      <ProfileViewer />
      <CreatePostButton />
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

      <button style={styles.viewPostButton} onClick={handleViewPost}>
        View Post
      </button>
    </div>
  );
};

const CreatePostButton = () => {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  const redirectToTextEditor = () => {
    navigate("/Texteditor");
  };

  const styles = {
    createPostButtonContainer: {
      textAlign: "center",
    },
    createPostButton: {
      marginTop: "20px", // Add margin to separate it from the View Post box
      padding: "30px 60px",
      fontSize: "28px",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "15px",
      cursor: "pointer",
      transition:
        "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    },
    createPostButtonHover: {
      backgroundColor: "#45a049",
      transform: "scale(1.05)",
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.2)",
    },
    createPostButtonPress: {
      transform: "scale(0.95)",
      boxShadow: "none",
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

const ProfileViewer = () => {
  const [profileName, setProfileName] = useState("");
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/${profileName}`);
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
    profileNameInput: {
      width: "70%",
      padding: "10px",
      fontSize: "16px",
      marginBottom: "10px",
      boxSizing: "border-box",
    },
    viewProfileButton: {
      width: "25%",
      padding: "7px",
      fontSize: "18px",
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      borderRadius: "2px",
      transition: "background-color 0.3s",
      marginLeft: "5px",
    },
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/profile/${profileName}`);
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        style={styles.profileNameInput}
        placeholder="Enter Profile Name"
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
        onKeyPress={handleKeyPress} // Add this line to handle Enter key press
      />
      <Link to={`/profile/${profileName}`}>
        <button style={styles.viewProfileButton} onClick={handleViewProfile}>
          &#10140; {/* Unicode for right arrow */}
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
