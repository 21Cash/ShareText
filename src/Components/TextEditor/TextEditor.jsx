import React, { useState, useRef } from "react";
import { UploadPost } from "../../REST";

const TextEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handleCreatePost = () => {
    UploadPost(title, content);
  };

  const styles = {
    textEditorContainer: {
      position: "relative",
      padding: "16px",
      backgroundColor: "#f0f0f0",
    },
    header: {
      fontSize: "24px",
      marginBottom: "16px",
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
      width: "100%", // Set width to 100%
      minHeight: "300px",
      padding: "16px",
      paddingRight: "20px", // Add padding to the right
      fontSize: "18px",
      fontFamily: "Arial, sans-serif",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      resize: "vertical",
    },
    createPostButton: {
      marginTop: "16px",
      marginLeft: "8px", // Move the button to the left
      padding: "12px",
      fontSize: "18px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
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
        <button style={styles.createPostButton} onClick={handleCreatePost}>
          Create Post
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
