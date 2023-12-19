import { getUA } from "@firebase/util";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, get, child } from "firebase/database";

const alertError = (error) => {
  alert(`errorCode : ${error.code}, msg : ${error.message}`);
};
const signUpUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    const db = getDatabase();
    const UID = user.uid;
    const username = user.email.substring(0, email.indexOf("@"));
    console.log(`Username : ${username}, UID : ${UID}`);

    const uref = ref(db, "/usernames");

    await set(child(uref, username), UID);

    return Promise.resolve();
  } catch (error) {
    console.error("Error signing in:", error);
    alert(error);
    return Promise.reject(error);
  }
};

const signInUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return Promise.resolve();
  } catch (error) {
    console.error("Error signing in:", error);
    alert(error);
    return Promise.reject(error);
  }
};

const logOutUser = async () => {
  try {
    await getAuth().signOut();
    return Promise.resolve();
  } catch (error) {
    console.error("Error signing out:", error.message);
    return Promise.reject();
  }
};

export { signInUser, signUpUser, logOutUser };
