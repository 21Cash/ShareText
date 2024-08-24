import React, { useEffect, useState, useRef } from "react";
import { getAuth } from "firebase/auth";
import {
  ref,
  getDatabase,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { Link } from "react-router-dom";
import { deletePost } from "../../REST";
import CollectionsList from "../CollectionsList/CollectionsList";

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
  cardListContainer: {
    display: "flex",
    marginBottom: "20px",
    alignItems: "center",
  },
  cardListButton: {
    padding: "10px 20px",
    marginRight: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: lightBlue,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
  },
  cardListButtonActive: {
    backgroundColor: green,
  },
  searchBox: {
    marginLeft: "4px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "300px",
  },
};

const Me = () => {
  const [userName, setUserName] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewingCard, setViewingCard] = useState("Posts");
  const [searchValue, setSearchValue] = useState("");
  const [collections, setCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [allCollections, setAllCollections] = useState([]);
  const searchInputRef = useRef(null);

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

            return postKeys;
          } catch (error) {
            console.error("Error fetching posts:", error);
            return [];
          }
        };

        const getCollections = async () => {
          // Fetch collections similar to how posts are fetched
          // For now, let's assume it's similar to posts fetching
          return [];
        };

        getPosts().then((postsData) => {
          setAllPosts(postsData);
          setUserPosts(postsData);
          setFilteredPosts(postsData);
          setLoading(false);
        });

        getCollections().then((collectionsData) => {
          setAllCollections(collectionsData);
          setCollections(collectionsData);
          setFilteredCollections(collectionsData);
        });
      } else {
        setUserName("");
        setUserPosts([]);
        setCollections([]);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (viewingCard === "Posts") {
      const filtered = allPosts.filter((post) =>
        post.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else if (viewingCard === "Collections") {
      const filtered = allCollections.filter((collection) =>
        collection.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCollections(filtered);
    }
  }, [searchValue, viewingCard, allPosts, allCollections]);

  const handleDelete = (postName) => {
    const doDelete = async () => {
      deletePost(postName).then(() => {
        setAllPosts(allPosts.filter((item) => item !== postName));
        setUserPosts(userPosts.filter((item) => item !== postName));
        console.log("Post Deleted Successfully");
      });
    };

    try {
      doDelete();
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const CardList = () => {
    return (
      <div style={styles.cardListContainer}>
        <button
          onClick={() => setViewingCard("Posts")}
          style={{
            ...styles.cardListButton,
            ...(viewingCard === "Posts" ? styles.cardListButtonActive : {}),
          }}
        >
          Posts
        </button>
        <button
          onClick={() => setViewingCard("Collections")}
          style={{
            ...styles.cardListButton,
            ...(viewingCard === "Collections"
              ? styles.cardListButtonActive
              : {}),
          }}
        >
          Collections
        </button>
        <input
          type="text"
          placeholder={
            viewingCard === "Posts"
              ? "Search posts..."
              : "Search collections..."
          }
          style={styles.searchBox}
          value={searchValue}
          onChange={handleSearchChange}
          ref={searchInputRef}
          autoFocus
        />
      </div>
    );
  };

  const PostsList = () => {
    return (
      <div>
        {viewingCard === "Posts" ? (
          <>
            {filteredPosts.map((post, index) => (
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
          </>
        ) : (
          <CollectionsList
            isCurrentUser={true}
            username={userName}
            collections={filteredCollections}
          />
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{userName}</h2>
      <CardList />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>{userName ? <PostsList /> : <p>User not found.</p>}</>
      )}
    </div>
  );
};

export { Me };
