import React from "react";
import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";

const testCode = () => {
  const db = getDatabase();
  const userId = "Laz";
  set(ref(db, "users/" + userId), {
    username: "Cash",
    email: "abc@cash.com",
  });
  console.log("data Pushed");
};

const Debug = () => {
  useEffect(() => {
    testCode();
  }, []);
};

export default Debug;
