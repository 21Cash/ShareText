import { getUA } from "@firebase/util";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
