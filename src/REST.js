import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";

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

export { UploadPost, getPost, postPresent, deletePost };
