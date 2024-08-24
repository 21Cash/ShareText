import React, { useEffect, useState, useRef } from "react";
import { getAuth } from "firebase/auth";
import {
  ref,
  getDatabase,
  get,
  query,
  orderByChild,
  child,
  equalTo,
  refFromURL,
} from "firebase/database";
import { Link } from "react-router-dom";
import { deleteCollection, deletePost } from "../../REST";
import CollectionsList from "../CollectionsList/CollectionsList";
import { getUserId } from "../../REST";
import PostView from "../PostView/PostView";
import CardList from "../CardList/CardList";

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
    margin: "0 auto 90px",
    padding: "3px 20px 20px 20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
    backgroundColor: darkBlue,
    color: "#ffffff",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "32px",
    paddingLeft: "10px",
    fontWeight: "bold",
    color: green,
  },
  listItem: {
    marginBottom: "15px",
    padding: "10px",
    marginLeft: "16px",
    marginRight: "16px",
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

        const fetchCollections = async () => {
          try {
            const uid = await getUserId(username);
            const db = await ref(getDatabase());
            const readPath = `users/${uid}/Collections/`;

            console.log(uid);

            console.log(`Fetching Collections of ${username}, uid: ${uid}`);

            const snapshot = await get(child(db, readPath));

            if (!snapshot.exists()) {
              console.error("Collections Not Found");
              return [];
            }

            console.log("Collections Fetched");
            const collectionsData = snapshot.val();
            let collections = [];
            Object.keys(collectionsData).forEach((key) => {
              collections.push(key);
            });

            console.log(collections);
            return collections;
          } catch (err) {
            console.error(err);
            console.error("Failed to get Collections", username);
            return [];
          }
        };

        getPosts().then((postsData) => {
          setAllPosts(postsData);
          setUserPosts(postsData);
          setFilteredPosts(postsData);
          setLoading(false);
        });

        fetchCollections().then((collectionsData) => {
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

  const handleDeletePost = (postName) => {
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

  const handleDeleteCollection = (collectionName) => {
    const performDeletion = async (collectionName) => {
      deleteCollection(collectionName).then(() => {
        setAllCollections(
          allCollections.filter((item) => item !== collectionName)
        );
      });
      console.log("Collection Deleted Successfully");
    };

    performDeletion(collectionName);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const ListView = () => {
    return (
      <div>
        {viewingCard === "Posts" ? (
          <PostView
            posts={filteredPosts}
            handleDelete={handleDeletePost}
            isCurrentUser={true}
          />
        ) : (
          <CollectionsList
            isCurrentUser={true}
            username={userName}
            collections={filteredCollections}
            handleDelete={handleDeleteCollection}
          />
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{userName}</h2>
      <CardList
        handleSearchChange={handleSearchChange}
        viewingCard={viewingCard}
        searchInputRef={searchInputRef}
        setViewingCard={setViewingCard}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>{userName ? <ListView /> : <p>User not found.</p>}</>
      )}
    </div>
  );
};

export { Me };
