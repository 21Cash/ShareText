import React from "react";

const darkBlue = "#1e2a3a";
const lightBlue = "#3f5176";
const darkGrey = "#333333";
const lightGrey = "#f5f5f5";
const red = "#f44336";
const green = "#4caf50";
const blue = "#2196f3";
const white = "#ffffff";

const styles = {
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
  cardListContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    paddingLeft: "15px",
    paddingBottom: "5px",
  },
  cardListButton: {
    padding: "10px 20px",
    marginRight: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: lightBlue,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
  },
  cardListButtonActive: {
    backgroundColor: green,
  },
  searchBox: {
    marginLeft: "4px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "300px",
  },
  horizontalLine: {
    width: "calc(100% - 40px)", // Adjust to make it shorter from left and right
    border: "none",
    borderTop: `1px solid black`,
    // borderTop: `1px solid ${darkGrey}`,
    marginBottom: "30px",
  },
};

const CardList = ({
  searchValue,
  handleSearchChange,
  viewingCard,
  searchInputRef,
  setViewingCard,
}) => {
  return (
    <div>
      <div style={styles.cardListContainer}>
        <button
          onClick={() => setViewingCard("Posts")}
          style={{
            ...styles.cardListButton,
            ...(viewingCard === "Posts" ? styles.cardListButtonActive : {}),
          }}
        >
          Posts
        </button>
        <button
          onClick={() => setViewingCard("Collections")}
          style={{
            ...styles.cardListButton,
            ...(viewingCard === "Collections"
              ? styles.cardListButtonActive
              : {}),
          }}
        >
          Collections
        </button>
        <input
          type="text"
          placeholder={
            viewingCard === "Posts"
              ? "Search posts..."
              : "Search collections..."
          }
          style={styles.searchBox}
          value={searchValue}
          onChange={handleSearchChange}
          ref={searchInputRef}
          autoFocus
        />
      </div>
      <hr style={styles.horizontalLine} />
    </div>
  );
};

export default CardList;
