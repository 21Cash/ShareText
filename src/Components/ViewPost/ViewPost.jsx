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
    <div style={containerStyle}>
      <h1 style={titleStyle}>{postName}</h1>
      <div style={textAreaContainerStyle}>
        <textarea value={postText} readOnly style={textAreaStyle} />
        <div style={buttonWrapperStyle}>
          <button onClick={handleCopyClick} style={copyButtonStyle}>
            {copyButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  backgroundColor: "#121720",
  color: "#FFFFFF",
  minHeight: "100vh",
  padding: "0px 0px 0px 15px",
};

const titleStyle = {
  fontSize: "24px",
  color: "#FFFFFF",
  marginLeft: "20px",
};

const textAreaContainerStyle = {
  marginTop: "20px",
  marginLeft: "20px",
  maxWidth: "1300px",

  marginRight: "50px",
  position: "relative",
};

const textAreaStyle = {
  width: "100%",
  height: "65vh",
  padding: "20px 25px 20px 20px",
  borderRadius: "8px",
  border: "1px solid #555",
  fontSize: "16px",
  lineHeight: "1.5",
  resize: "none",
  overflowX: "auto",
  whiteSpace: "pre",
  backgroundColor: "#1F2A36",
  color: "#FFFFFF",
};

const buttonWrapperStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: 1,
};

const copyButtonStyle = {
  padding: "8px 16px",
  fontSize: "14px",
  borderRadius: "4px",
  cursor: "pointer",
  backgroundColor: "#2c3e50",
  color: "#FFFFFF",
  border: "none",
};

export default ViewPost;
