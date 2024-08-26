import React from "react";

const footerStyles = {
  container: {
    background: "linear-gradient(270deg, #2c3e50, #1a1a1a, #2c3e50)",
    backgroundSize: "400% 400%",
    animation: "gradientTransition 15s ease infinite",
    color: "#ecf0f1",
    padding: "10px 20px",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
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
        &copy; {currentYear} | Made With ❤ by Sushil L.
      </p>
      <a
        href="https://github.com/21ThousandProof/ShareText"
        target="_blank"
        rel="noopener noreferrer"
        style={footerStyles.link}
        onMouseEnter={(e) =>
          (e.target.style.textDecoration =
            footerStyles.linkHover.textDecoration)
        }
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
      >
        View Source Code
      </a>
    </footer>
  );
};

export default Footer;
