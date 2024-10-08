import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { refFromURL } from "firebase/database";

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
    margin: "0 auto 0px",
    padding: "3px 20px 0px 20px",
    borderRadius: "8px",
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

const CollectionsList = ({
  isCurrentUser,
  username,
  collections,
  handleDelete,
}) => {
  const navigate = useNavigate();

  const onClickEdit = (collectionName) => {
    if (collectionName == "") return;
    navigate(`/CollectionEditor/${collectionName}`);
  };

  return (
    <div style={styles.container}>
      {collections &&
        collections.length > 0 &&
        collections.map((collection, index) => (
          <div key={index} style={styles.listItem}>
            <span style={styles.postTitle}>{collection}</span>
            <div style={styles.buttonsContainer}>
              <button
                onClick={() => {
                  navigate(`/${username}/Collections/${collection}`);
                }}
                style={{ ...styles.actionButton, ...styles.viewButton }}
              >
                View
              </button>
              {isCurrentUser && (
                <>
                  <button
                    onClick={() => onClickEdit(collection)}
                    style={{ ...styles.actionButton, ...styles.editButton }}
                  >
                    Edit
                  </button>
                  <button
                    style={{ ...styles.actionButton, ...styles.deleteButton }}
                    onClick={() => handleDelete(collection)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

      {!collections || (collections.length == 0 && <h3>No Collections.</h3>)}
    </div>
  );
};

export default CollectionsList;
