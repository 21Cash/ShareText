import React from "react";
import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getPost } from "../../REST";

const testCode = () => {
  getPost("Hello World");
};

const testCode2 = () => {
  console.log(getAuth().currentUser.uid);
};
const Debug = () => {
  return (
    <>
      <h2>DEBUG</h2>
      <button onClick={testCode}> Run Code </button>
      <button onClick={testCode2}> Run Code 2 </button>
    </>
  );
};

export default Debug;
