import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const alertError = (error) => {
  alert(`Signup Failed, errorCode : ${error.code}, msg : ${error.message}`);
};

export const signUpUser = (email, password) => {
  console.log("Trying To Signup");
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User Signup Successfully");
      console.log(user);
    })
    .catch((error) => {
      alertError(error);
    });
};
