import { refFromURL } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const darkBlue = "#1e2a3a";
const lightBlue = "#3f5176";
const darkGrey = "#333333";
const lightGrey = "#f5f5f5";
const red = "#f44336";
const green = "#4caf50";
const blue = "#2196f3";
const white = "#ffffff";

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto 50px",
    padding: "3px 20px 20px 20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
    backgroundColor: darkBlue,
    color: "#ffffff",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "32px",
    fontWeight: "bold",
    color: green,
  },
  listItem: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "6px",
    boxShadow: "0 0 5px rgba(255, 255, 255, 0.1)",
    backgroundColor: lightGrey,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postTitle: {
    fontSize: "18px",
    color: darkGrey,
    marginRight: "20px",
    overflow: "auto",
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
  },
  actionButton: {
    padding: "8px 12px",
    marginRight: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "14px",
  },
  editButton: {
    backgroundColor: green,
  },
  viewButton: {
    backgroundColor: blue,
  },
  deleteButton: {
    backgroundColor: red,
  },
};
const PostsList = ({ header, isCurrentViewer = false, posts = [] }) => {
  const handleDelete = (post) => {
    console.log(`Deleting post: ${post}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{header}</h2>

      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <div style={styles.listItem} key={index}>
            <span style={styles.postTitle}>{post}</span>
            <div style={styles.buttonsContainer}>
              <Link
                to={`/viewpost/${post}`}
                style={{ ...styles.actionButton, ...styles.viewButton }}
              >
                View
              </Link>
              <Link
                to={`/editpost/${post}`}
                style={{ ...styles.actionButton, ...styles.editButton }}
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(post)}
                style={{ ...styles.actionButton, ...styles.deleteButton }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <>
          <h3> Loading Collection...</h3>
        </>
      )}
    </div>
  );
};
export default PostsList;
