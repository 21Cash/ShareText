import { getDatabase, ref, set } from "firebase/database";
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

export { UploadPost };
