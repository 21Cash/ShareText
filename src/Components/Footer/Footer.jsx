import React from "react";

const footerStyles = {
  container: {
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    padding: "15px 20px",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  copyright: {
    fontSize: "14px",
    margin: "0",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
  },
  linkHover: {
    textDecoration: "underline",
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyles.container}>
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
    </footer>
  );
};

export default Footer;
