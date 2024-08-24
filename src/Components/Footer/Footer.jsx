// Footer.jsx

import React from "react";

const footerStyles = {
  container: {
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    padding: "10px 20px",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
  },
  copyright: {
    fontSize: "14px",
    marginBottom: "5px",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
    marginLeft: "5px",
  },
  linkHover: {
    textDecoration: "underline",
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyles.container}>
      <div>
        <p style={footerStyles.copyright}>
          &copy; {currentYear} Made With ❤ by Sushil L.
        </p>
        <a
          href="https://github.com/21ThousandProof/ShareText"
          target="_blank"
          rel="noopener noreferrer"
          style={footerStyles.link}
        >
          View Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
