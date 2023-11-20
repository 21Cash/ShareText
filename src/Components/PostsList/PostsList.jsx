// PostsList.js

import React, { useState } from "react";

const PostsList = () => {
  const [posts, setPosts] = useState([
    { id: 1, name: "Post 1" },
    { id: 2, name: "Post 2" },
    { id: 3, name: "Post 3" },
  ]);

  const handleEdit = (postId) => {
    // Implement the edit functionality
    console.log(`Edit post with ID: ${postId}`);
  };

  const handleDelete = (postId) => {
    // Implement the delete functionality
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    console.log(`Delete post with ID: ${postId}`);
  };

  // Styles as a JavaScript object
  const styles = {
    postsList: {
      width: "60%",
      margin: "auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    listItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      borderBottom: "1px solid #eee",
    },
    button: {
      marginLeft: "10px",
      padding: "5px 10px",
      cursor: "pointer",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.postsList}>
      <h2>Posts List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={styles.listItem}>
            <span>{post.name}</span>
            <button style={styles.button} onClick={() => handleEdit(post.id)}>
              Edit
            </button>
            <button
              style={{ ...styles.button, ...styles.buttonHover }}
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
