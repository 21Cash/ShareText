import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";

const UploadPost = async (postTitle, postText) => {
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
    console.error("An Error Occurred while Uploading the Post:", error);
    alert("An Error Occurred while Uploading the Post, Try Again");
    return Promise.reject();
  }
};

const getPost = async (postName) => {
  const dbRef = ref(getDatabase());

  console.log(`Trying to get Post With Name ${postName}`);

  try {
    const snapshot = await get(child(dbRef, `posts/${postName}`));

    if (snapshot.exists()) {
      const postData = snapshot.val();
      console.log(`Returning ${postData.text}`);
      return Promise.resolve(postData.text);
    } else {
      console.log("No data available");
      return Promise.reject("No data available");
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export { UploadPost, getPost };
