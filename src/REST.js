import {
  getDatabase,
  ref,
  set,
  get,
  child,
  query,
  orderByChild,
  equalTo,
  runTransaction,
  refFromURL,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import { cloneElement, createRef } from "react";

const getUserId = async (username) => {
  try {
    username = username.toLowerCase();
    const db = ref(getDatabase());
    const readPath = `usernames/${username}`;

    const snapshot = await get(child(db, readPath));

    if (!snapshot.exists()) {
      console.error("Username Not Found");
      return null;
    }

    const uid = snapshot.val();
    return uid;
  } catch (err) {
    console.error(err);
    console.error("Failed to get UID of username", username);
    return null;
  }
};

const UploadPost = async (postTitle, postText) => {
  const _auth = getAuth();
  if (_auth.currentUser == null) {
    console.log("Not Authenticated");
    return Promise.reject("User Not Authenticated");
  }

  try {
    const database = getDatabase();
    const auth = await getAuth();
    const id = auth.currentUser.uid;

    const dbref = ref(database, "posts/" + postTitle);

    await set(dbref, {
      uid: id,
      text: postText,
    });

    return Promise.resolve();
  } catch (error) {
    console.error(
      "An Error Occurred while Uploading the Post, try Renaming the title:",
      error
    );
    alert(
      "An Error Occurred while Uploading the Post, try Renaming the post title"
    );
    return Promise.reject();
  }
};

const postPresent = async (postName) => {
  const dbRef = ref(getDatabase());

  console.log(`Trying to get Post With Name ${postName}`);

  try {
    const snapshot = await get(child(dbRef, `posts/${postName}`));

    if (snapshot.exists()) {
      return; // Found post So return
    } else {
      throw new Error("No Post Found");
    }
  } catch (error) {
    alert("No Post Found");
    console.error(error);
    throw error;
  }
};

const getPost = async (postName) => {
  const dbRef = ref(getDatabase());

  console.log(`Trying to get Post With Name ${postName}`);

  try {
    const snapshot = await get(child(dbRef, `posts/${postName}`));

    if (snapshot.exists()) {
      const postData = snapshot.val();
      return Promise.resolve(postData.text);
    } else {
      console.log("No data available");
      alert("No Post Found");
      return Promise.reject("No data available");
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

const deletePost = async (postName) => {
  try {
    const db = getDatabase();
    await set(ref(db, `posts/${postName}`), null);
    console.log("Post deleted.");
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

const getCollections = async (username) => {
  try {
    const uid = await getUserId(username);
    const db = ref(getDatabase());
    const readPath = `users/${uid}/Collections/`;

    console.log(`Fetching Collections of ${username}, uid: ${uid}`);

    const snapshot = await get(child(db, readPath));

    if (!snapshot.exists()) {
      console.error("Collections Not Found");
      return [];
    }

    console.log("Collections Fetched");
    const collectionsData = snapshot.val();
    let collections = [];
    Object.keys(collectionsData).forEach((key) => {
      collections.push(key);
    });

    console.log(collections);
    return collections;
  } catch (err) {
    console.error(err);
    console.error("Failed to get Collections", username);
    return [];
  }
};

const getCollectionPosts = async (username, collectionName) => {
  try {
    const db = await ref(getDatabase());
    const uid = await getUserId(username);

    const readPath = `users/${uid}/Collections/${collectionName}`;

    const snapshot = await get(child(db, readPath));

    if (!snapshot.exists()) {
      console.error(`No Collection Named : ${collectionName}`);
      return null;
    }
    return snapshot.val().posts;
  } catch (err) {
    console.error(
      `Failed to fetch Collection Posts, collectionName : ${collectionName}, username : ${username}`
    );
    return null;
  }
};

const uploadCollection = async (collectionName, posts) => {
  try {
    const db = getDatabase();
    const collectionItem = {
      posts,
    };

    const auth = await getAuth();
    const id = auth.currentUser.uid;

    const write_path = `users/${id}/Collections/${collectionName}`;
    await set(ref(db, write_path), collectionItem);

    console.log("Collection Uploaded", collectionItem);
  } catch (err) {
    console.error(err);
    console.error("Couldn't Update Collection.");
    alert("Collection Upload Failed, try renaming the collection.");
  }
};

const deleteCollection = async (collectionName) => {
  try {
    const db = getDatabase();
    const auth = await getAuth();
    const id = auth.currentUser.uid;

    const del_path = `users/${id}/Collections/${collectionName}`;
    await set(ref(db, del_path), null);

    console.log("Collection Deleted", collectionName);
  } catch (err) {
    console.error(err);
    console.error("Couldn't Delete Collection.");
  }
};

export {
  UploadPost,
  getPost,
  postPresent,
  deletePost,
  uploadCollection,
  getUserId,
  getCollections,
  getCollectionPosts,
  deleteCollection,
};
