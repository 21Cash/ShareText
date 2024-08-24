import { useEffect, useReducer, useState } from "react";
import PostsList from "../PostsList/PostsList";
import { getCollectionPosts } from "../../REST";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import {
  ref,
  getDatabase,
  get,
  query,
  orderByChild,
  equalTo,
  refFromURL,
} from "firebase/database";

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

const CollectionEditor = () => {
  const { collectionName } = useParams();
  const [username, setUsername] = useState("");
  const [allPosts, setAllPosts] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        const _username = email.substring(0, email.indexOf("@"));
        setUsername(_username);

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
          setAllPosts(postsData);
        });

        // Fetch posts only after the username is set
        if (collectionName != "") {
          getCollectionPosts(_username, collectionName).then((postsData) => {
            setPosts(postsData);
          });
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [collectionName]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{collectionName}</h2>

      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <div style={styles.listItem} key={index}>
            <span style={styles.postTitle}>{post}</span>
            <div style={styles.buttonsContainer}>
              <button
                onClick={() => handleDelete(post)}
                style={{ ...styles.actionButton, ...styles.deleteButton }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <>
          <h3> Loading Collection...</h3>
        </>
      )}
    </div>
  );
};

export default CollectionEditor;
