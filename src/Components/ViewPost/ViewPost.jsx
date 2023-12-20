import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../REST";

const ViewPost = () => {
  const { postName } = useParams();
  const [postText, setPostText] = useState("Loading...");
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  useEffect(() => {
    getPost(postName).then((result) => {
      setPostText(result);
      console.log(`Post Text updated TO ${result}`);
    });
  }, [postName]);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(postText)
      .then(() => {
        console.log("Text copied to clipboard!");
        setCopyButtonText("Copied!");

        setTimeout(() => {
          setCopyButtonText("Copy");
        }, 3000);
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard.", err);
      });
  };

  return (
    <div>
      <h1 style={titleStyle}>{postName}</h1>
      <div style={textAreaContainerStyle}>
        <textarea value={postText} readOnly style={textAreaStyle} />
        <button onClick={handleCopyClick} style={copyButtonStyle}>
          {copyButtonText}
        </button>
      </div>
    </div>
  );
};

const titleStyle = {
  fontSize: "24px",
  color: "#333",
  marginLeft: "20px",
};

const textAreaContainerStyle = {
  marginTop: "20px",
  marginLeft: "20px",
  maxWidth: "1200px",
  marginRight: "50px",
  position: "relative",
  paddingBottom: "200px",
};

const textAreaStyle = {
  width: "100%",
  height: "300px",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  lineHeight: "1.5",
  fontFamily: "Arial, sans-serif",
  resize: "vertical",
};

const copyButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  padding: "5px 10px",
  fontSize: "16px",
  borderRadius: "4px",
  cursor: "pointer",
  backgroundColor: "#2c3e50",
  color: "white",
  border: "none",
};

export default ViewPost;
