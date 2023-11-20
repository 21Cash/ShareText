import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../REST";

const ViewPost = () => {
  const { postName } = useParams();
  const [postText, setPostText] = useState("Your Post Text");

  useEffect(() => {
    getPost(postName).then((result) => {
      setPostText(result);
      console.log(`Post Text updated TO ${result}`);
    });
  }, [postName]);

  return (
    <div>
      <h1 style={titleStyle}>{postName}</h1>
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
