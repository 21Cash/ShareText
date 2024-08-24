import React, { useState, useEffect, useRef } from "react";

const darkBlue = "#1e2a3a";
const lightBlue = "#3f5176";
const darkGrey = "#333333";
const lightGrey = "#f5f5f5";
const red = "#f44336";
const green = "#4caf50";
const blue = "#2196f3";
const white = "#ffffff";

const CardList = ({
  searchValue,
  handleSearchChange,
  viewingCard,
  setViewingCard,
  searchInputRef,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardListContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    paddingLeft: "15px",
    paddingBottom: "5px",
    flexDirection: isMobile ? "column" : "row", // Column on mobile, row on desktop
  };

  const buttonStyle = {
    padding: "10px 20px",
    marginRight: isMobile ? "0" : "10px",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: lightBlue,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
    width: isMobile ? "100%" : "auto", // Full width on mobile, auto on desktop
    textAlign: "center",
    boxSizing: "border-box", // Ensures padding is included in width
    marginBottom: isMobile ? "10px" : "0", // Space between buttons on mobile
  };

  const searchBoxStyle = {
    marginLeft: isMobile ? "0" : "4px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: isMobile ? "100%" : "300px", // Full width on mobile
    marginTop: isMobile ? "10px" : "0", // Margin top for mobile
    boxSizing: "border-box", // Ensures padding is included in width
  };

  return (
    <div>
      <div style={cardListContainerStyle}>
        <button
          onClick={() => setViewingCard("Posts")}
          style={{
            ...buttonStyle,
            backgroundColor: viewingCard === "Posts" ? green : lightBlue,
          }}
        >
          Posts
        </button>
        <button
          onClick={() => setViewingCard("Collections")}
          style={{
            ...buttonStyle,
            backgroundColor: viewingCard === "Collections" ? green : lightBlue,
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
          style={searchBoxStyle}
          value={searchValue}
          onChange={handleSearchChange}
          ref={searchInputRef}
        />
      </div>
      <hr
        style={{
          width: "calc(100% - 40px)",
          border: "none",
          borderTop: `1px solid black`,
          marginBottom: "30px",
        }}
      />
    </div>
  );
};

export default CardList;
