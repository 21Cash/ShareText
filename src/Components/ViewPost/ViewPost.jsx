import React, { useEffect, useState } from "react";

const ViewPost = () => {
  const [postTitle, setPostTitle] = useState("Your Post Title");
  const [postText, setPostText] = useState("Your Post Text");

  useEffect(() => {}, []);

  return (
    <div>
      <h1 style={titleStyle}>{postTitle}</h1>
      <div style={textAreaContainerStyle}>
        <textarea value={postText} readOnly style={textAreaStyle} />
      </div>
    </div>
  );
};

const titleStyle = {
  fontSize: "24px",
  color: "#333",
  marginLeft: "20px", // Adjust the left margin as needed
};

const textAreaContainerStyle = {
  marginTop: "20px",
  marginLeft: "20px", // Adjust the left margin as needed
  maxWidth: "1200px", // Set a maximum width for the text editor container
  marginRight: "50px", // Adjust the right margin as needed
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
  resize: "none",
};

export default ViewPost;
