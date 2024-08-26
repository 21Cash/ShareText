import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postPresent } from "../../REST";

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
      border: "1px solid #555",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      textAlign: "center",
      backgroundColor: "#1F2A36",
    },
    postNameInput: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #555",
      backgroundColor: "#2C3E50",
      color: "#FFFFFF",
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
    viewPostButtonHover: {
      backgroundColor: "#2980b9",
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
      <button
        style={styles.viewPostButton}
        onClick={handleViewPost}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            styles.viewPostButtonHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor =
            styles.viewPostButton.backgroundColor)
        }
      >
        View Post
      </button>
    </div>
  );
};

const CreateCollection = () => {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  const redirectToCollectionEditor = () => {
    navigate("/CreateCollection");
  };

  const styles = {
    buttonContainer: {
      textAlign: "center",
    },
    button: {
      marginTop: "50px",
      padding: "30px 60px",
      fontSize: "28px",
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
      borderRadius: "15px",
      cursor: "pointer",
      transition:
        "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
    },
    buttonHover: {
      backgroundColor: "#2980b9",
      transform: "scale(1.05)",
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.4)",
    },
    buttonPress: {
      transform: "scale(0.95)",
      boxShadow: "none",
    },
  };

  return (
    <div style={styles.buttonContainer}>
      <button
        style={{
          ...styles.button,
          ...(isPressed ? styles.buttonPress : styles.buttonHover),
        }}
        onClick={redirectToCollectionEditor}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        Create Collection
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
    buttonContainer: {
      textAlign: "center",
    },
    button: {
      marginTop: "20px",
      padding: "30px 60px",
      fontSize: "28px",
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
      borderRadius: "15px",
      cursor: "pointer",
      transition:
        "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
    },
    buttonHover: {
      backgroundColor: "#2980b9",
      transform: "scale(1.05)",
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.4)",
    },
    buttonPress: {
      transform: "scale(0.95)",
      boxShadow: "none",
    },
  };

  return (
    <div style={styles.buttonContainer}>
      <button
        style={{
          ...styles.button,
          ...(isPressed ? styles.buttonPress : styles.buttonHover),
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
      margin: "10px auto",
      padding: "20px",
      border: "1px solid #555",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      textAlign: "center",
      backgroundColor: "#1F2A36",
    },
    profileNameInput: {
      width: "70%",
      padding: "10px",
      fontSize: "16px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #555",
      backgroundColor: "#2C3E50",
      color: "#FFFFFF",
    },
    viewProfileButton: {
      width: "25%",
      padding: "10px",
      fontSize: "18px",
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      borderRadius: "4px",
      transition: "background-color 0.3s",
      marginLeft: "5px",
    },
    viewProfileButtonHover: {
      backgroundColor: "#2980b9",
    },
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleViewProfile();
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
        onKeyPress={handleKeyPress}
      />
      <button
        style={styles.viewProfileButton}
        onClick={handleViewProfile}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            styles.viewProfileButtonHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor =
            styles.viewProfileButton.backgroundColor)
        }
      >
        Go
      </button>
    </div>
  );
};

const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "45px",
        paddingBottom: "35px",
        backgroundColor: "#121720",
        color: "#FFFFFF",
      }}
    >
      <PostSearcher />
      <ProfileViewer />
      <CreatePostButton />
      <CreateCollection />
    </div>
  );
};

export default Homepage;
