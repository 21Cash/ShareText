import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const alertError = (error) => {
  alert(`Signup Failed, errorCode : ${error.code}, msg : ${error.message}`);
};

export const signUpUser = async (email, password) => {
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

export const signInUser = async (email, password) => {
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
