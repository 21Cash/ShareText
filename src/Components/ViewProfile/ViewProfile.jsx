import React, { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  get,
} from "firebase/database";
import { Link, useParams } from "react-router-dom";
import { onValue } from "firebase/database";

const darkBlue = "#1e2a3a";
const lightGrey = "#f5f5f5";
const blue = "#2196f3";

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
    color: blue,
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
    color: "#333333",
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
  viewButton: {
    backgroundColor: blue,
  },
};

const ViewProfile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userFound, setUserFound] = useState(false);
  let { username } = useParams();

  useEffect(() => {
    username = username.toLocaleLowerCase();
    const db = getDatabase();
    const usernamesRef = ref(db, `usernames/${username}`);
    const updatePosts = async (UID) => {
      const curPosts = await fetchUserPosts(UID);
      console.log(curPosts);
      console.log(username);
      setUserPosts(curPosts);
      setLoading(false);
    };
    onValue(usernamesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const UID = data;
        setUserFound(true);
        updatePosts(UID);
      } else {
        setUserFound(false);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div style={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {username && !loading && userFound ? (
            <div>
              <h2 style={styles.heading}>{username}</h2>
              <h3> Posts :</h3>
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
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <h3>
                <span style={{ color: "red" }}>
                  Invalid Username : {username}
                </span>
              </h3>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ViewProfile;
