import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { UploadPost, getPost } from "../../REST";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const TextEditor = ({}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pressed, setPressed] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const textareaRef = useRef(null);
  const navigate = useNavigate();
  const { postName } = useParams();
  useEffect(() => {
    if (postName) {
      setEditMode(true);
      console.log(`Edit Mode : ${true}`);
      setTitle(postName);
      getPost(postName).then((initialText) => {
        console.log(initialText);
        setContent(initialText);
      });
    }
  }, []);

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
      padding: "30px",
      backgroundColor: "#f0f0f0",
      marginBottom: "100px",
    },
    titleInput: {
      width: "99%",
      marginBottom: "8px",
      padding: "8px",
      fontSize: "18px",
      fontFamily: "Arial, sans-serif",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    textEditor: {
      width: "98%",
      minHeight: "60vh",
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
          readOnly={editMode}
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
          {editMode ? <>UpdatePost</> : <>Create Post</>}
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
