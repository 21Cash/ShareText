export const backendUrl = "http://localhost:3000";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUy1bhWG-83oU2zJVKlJWNAO56fdsDybY",
  authDomain: "textshare-37fab.firebaseapp.com",
  projectId: "textshare-37fab",
  storageBucket: "textshare-37fab.appspot.com",
  messagingSenderId: "796140934378",
  appId: "1:796140934378:web:0e392b13f403314035b393",
  measurementId: "G-JQ5E5WFX86",
  databaseURL:
    "https://textshare-37fab-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const database = initializeApp(firebaseConfig);
export default database;
