import React from "react";
import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";

const uploadPost = () => {
  const database = getDatabase();
  const id = getAuth().currentUser.uid;
  const postname = "XYZ OPSTO";
  const postText = "This is qwdnoiqwndcqwedit\n";

  const dbref = ref(database, "posts/" + postname);

  set(dbref, {
    uid: id,
    text: postText,
  });
};

const testCode = () => {
  // const db = getDatabase();
  // const userId = "Laz";
  // set(ref(db, "users/" + userId), {
  //   username: "Cash",
  //   email: "abc@cash.com",
  // });
  // console.log("data Pushed");

  uploadPost();
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
