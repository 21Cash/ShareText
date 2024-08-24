import React from "react";
import { useSearchParams } from "react-router-dom";

const MessageScreen = () => {
  const [searchParams] = useSearchParams();
  const msgText = searchParams.get("msgText") || "";
  const textColor = searchParams.get("textColor") || "green";

  return (
    <>
      <p
        style={{
          paddingTop: "0px",
          fontSize: "30px",
          color: textColor,
          fontWeight: "bold",
          paddingLeft: "20px",
        }}
      >
        {msgText}
      </p>
    </>
  );
};

export default MessageScreen;
