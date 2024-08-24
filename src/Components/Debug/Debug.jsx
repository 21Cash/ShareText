import React from "react";
import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getPost, getUserId, uploadCollection } from "../../REST";

const testCode = () => {
  uploadCollection("ADS", ["qwdqwd", "qwxqwxwq"]);
};

const testCode2 = () => {
  console.log(getAuth().currentUser.uid);
};

const testCode3 = async () => {};

const Debug = () => {
  return (
    <>
      <h2>DEBUG</h2>
      <button onClick={testCode}> Upload Collection </button>
      <button onClick={testCode2}> Run Code 2 </button>
      <button onClick={testCode3}> Fetch All Posts </button>
    </>
  );
};

export default Debug;
