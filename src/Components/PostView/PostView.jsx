import React from "react";
import { Link, useNavigate } from "react-router-dom";

const darkGrey = "#333333";
const lightGrey = "#f5f5f5";
const red = "#f44336";
const green = "#4caf50";
const blue = "#2196f3";

const styles = {
  listItem: {
    marginBottom: "15px",
    padding: "10px",
    marginLeft: "16px",
    marginRight: "16px",
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

const PostView = ({ posts, handleDelete, isCurrentUser = false }) => {
  const navigate = useNavigate();
  return (
    <div>
      {posts.map((post, index) => (
        <div style={styles.listItem} key={index}>
          <span style={styles.postTitle}>{post}</span>
          <div style={styles.buttonsContainer}>
            <button
              onClick={() => {
                navigate(`/viewpost/${post}`);
              }}
              style={{ ...styles.actionButton, ...styles.viewButton }}
            >
              View
            </button>
            {isCurrentUser && (
              <>
                <button
                  onClick={() => {
                    navigate(`/editpost/${post}`);
                  }}
                  style={{ ...styles.actionButton, ...styles.editButton }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post)}
                  style={{ ...styles.actionButton, ...styles.deleteButton }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostView;
