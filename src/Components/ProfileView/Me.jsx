import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  ref,
  getDatabase,
  get,
  child,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { onValue } from "firebase/database";
import "firebase/auth";
import { Link } from "react-router-dom";
import { getPost } from "../../REST";
import { deletePost } from "../../REST";

const darkBlue = "#1e2a3a";
const lightBlue = "#3f5176";
const darkGrey = "#333333";
const lightGrey = "#f5f5f5";
const red = "#f44336";
const green = "#4caf50";
const blue = "#2196f3";
const white = "#ffffff";

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto 50px",
    padding: "3px 20px 20px 20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
    backgroundColor: darkBlue,
    color: "#ffffff",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "32px",
    fontWeight: "bold",
    color: green,
  },
  listItem: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "6px",
    boxShadow: "0 0 5px rgba(255, 255, 255, 0.1)",
    backgroundColor: lightGrey,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postTitle: {
    fontSize: "18px",
    color: darkGrey,
    marginRight: "20px",
    overflow: "auto",
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
  },
  actionButton: {
    padding: "8px 12px",
    marginRight: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "14px",
  },
  editButton: {
    backgroundColor: green,
  },
  viewButton: {
    backgroundColor: blue,
  },
  deleteButton: {
    backgroundColor: red,
  },
};

const Me = () => {
  const [userName, setUserName] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        const username = email.substring(0, email.indexOf("@"));
        setUserName(username);

        const currentUID = user.uid;
        const dbRef = ref(getDatabase());
        const getPosts = async () => {
          try {
            const db = getDatabase();
            const postsRef = ref(db, "posts");
            const queryForUID = query(
              postsRef,
              orderByChild("uid"),
              equalTo(currentUID)
            );
            const snapshot = await get(queryForUID);
            const postKeys = [];
            snapshot.forEach((childSnapshot) => {
              const postKey = childSnapshot.key;
              postKeys.push(postKey);
            });

            console.log(postKeys);
            return postKeys;
          } catch (error) {
            console.error("Error fetching posts:", error);
            return [];
          }
        };

        getPosts().then((postsData) => {
          setUserPosts(postsData);
          setLoading(false);
        });
      } else {
        setUserName("");
        setUserPosts([]);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleDelete = (postName) => {
    const doDelete = async () => {
      console.log(`From ME ${postName}]`);
      deletePost(postName).then(() => {
        setUserPosts(userPosts.filter((item) => item !== postName));
        console.log("Post Deleted Successfully");
      });
    };

    try {
      doDelete();
    } catch (err) {
      console.err(err);
      alert(err);
    }
  };

  return (
    <div style={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userName ? (
            <div>
              <h2 style={styles.heading}>{userName}</h2>
              <h3>My Posts:</h3>
              {userPosts.map((post, index) => (
                <div style={styles.listItem} key={index}>
                  <span style={styles.postTitle}>{post}</span>
                  <div style={styles.buttonsContainer}>
                    <Link
                      to={`/viewpost/${post}`}
                      style={{ ...styles.actionButton, ...styles.viewButton }}
                    >
                      View
                    </Link>
                    <Link
                      to={`/editpost/${post}`}
                      style={{ ...styles.actionButton, ...styles.editButton }}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post)}
                      style={{ ...styles.actionButton, ...styles.deleteButton }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>User not found.</p>
          )}
        </>
      )}
    </div>
  );
};

export { Me };
