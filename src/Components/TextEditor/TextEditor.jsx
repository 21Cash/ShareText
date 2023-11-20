import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { UploadPost } from "../../REST";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const TextEditor = ({ postName }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pressed, setPressed] = useState(false);
  const textareaRef = useRef(null);
  const navigate = useNavigate();
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handleCreatePost = () => {
    UploadPost(title, content)
      .then(() => {
        navigate("/PostCreated");
      })
      .catch((error) => {
        console.log("Failed To Create Post.");
        alert(error);
      });
  };

  const styles = {
    textEditorContainer: {
      position: "relative",
      padding: "16px",
      backgroundColor: "#f0f0f0",
    },
    titleInput: {
      width: "100%",
      marginBottom: "8px",
      padding: "8px",
      fontSize: "18px",
      fontFamily: "Arial, sans-serif",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    textEditor: {
      width: "100%",
      minHeight: "300px",
      padding: "16px",
      paddingRight: "20px",
      fontSize: "18px",
      fontFamily: "Arial, sans-serif",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      resize: "vertical",
    },
    createPostButton: {
      marginTop: "16px",
      marginLeft: "8px",
      padding: "12px",
      fontSize: "18px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "transform 0.3s", // Add transition for a smooth effect
    },
    createPostButtonPressed: {
      transform: "scale(0.95)", // Decrease size when pressed
    },
  };

  const handlePress = () => {
    handleCreatePost();
    setPressed(false);
    // Additional logic or effects when the button is pressed
  };

  return (
    <div>
      <div style={styles.textEditorContainer}>
        <input
          style={styles.titleInput}
          type="text"
          placeholder="Enter post title..."
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          ref={textareaRef}
          style={styles.textEditor}
          value={content}
          onChange={handleInputChange}
          placeholder="Type your post here..."
        />
        <button
          style={{
            ...styles.createPostButton,
            ...(pressed && styles.createPostButtonPressed),
          }}
          onClick={handlePress}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
