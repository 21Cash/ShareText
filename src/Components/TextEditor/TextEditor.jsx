import React, { useState, useRef } from "react";

const TextEditor = () => {
  const [content, setContent] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const textareaRef = useRef(null);

  const handleInputChange = (event) => {
    setContent(event.target.value);
    setIsCopied(false); // Reset the copied state when the content changes
  };

  const handleCopyToClipboard = async () => {
    if (textareaRef.current) {
      try {
        await navigator.clipboard.writeText(content);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 5000); // Reset the copied state after 5 seconds
      } catch (err) {
        console.error("Unable to copy to clipboard:", err);
      }
    }
  };

  const styles = {
    textEditorContainer: {
      position: "relative",
      padding: "16px",
      backgroundColor: "#f0f0f0",
    },
    textEditor: {
      width: "100%",
      minHeight: "300px",
      padding: "16px",
      fontSize: "18px",
      fontFamily: "Arial, sans-serif",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      resize: "vertical",
    },
    copyButtonContainer: {
      marginTop: "8px",
      textAlign: "right",
    },
    copyButton: {
      padding: "8px",
      fontSize: "16px",
      backgroundColor: isCopied ? "#4CAF50" : "#2196F3",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    tickMark: {
      marginRight: "8px",
      animation: isCopied ? "tickMark 0.5s ease-in-out" : "none",
    },
  };

  return (
    <div style={styles.textEditorContainer}>
      <textarea
        ref={textareaRef}
        style={styles.textEditor}
        value={content}
        onChange={handleInputChange}
        placeholder="Type your text here..."
      />
      <div style={styles.copyButtonContainer}>
        <button style={styles.copyButton} onClick={handleCopyToClipboard}>
          <span style={styles.tickMark}>&#10003;</span>
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
      <style>{`
        @keyframes tickMark {
          0% { transform: scaleX(0) }
          50% { transform: scaleX(1.5) }
          100% { transform: scaleX(1) }
        }
      `}</style>
    </div>
  );
};

export default TextEditor;
