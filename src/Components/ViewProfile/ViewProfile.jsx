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
import { Link, useParams } from "react-router-dom";
import { deleteCollection, deletePost, getCollections } from "../../REST";
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
    paddingLeft: "15px",
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

const ViewProfile = () => {
  const { username } = useParams();
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
    const getPosts = async () => {
      try {
        const currentUID = await getUserId(username);
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
        return getCollections(username);
      } catch (err) {
        console.error(err);
        console.error("Failed to get Collections", username);
        return null;
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

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const ListView = () => {
    return (
      <div>
        {viewingCard === "Posts" ? (
          <PostView posts={filteredPosts} />
        ) : (
          <CollectionsList
            username={username}
            collections={filteredCollections}
          />
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{username}</h2>
      <CardList
        handleSearchChange={handleSearchChange}
        viewingCard={viewingCard}
        searchInputRef={searchInputRef}
        setViewingCard={setViewingCard}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>{username ? <ListView /> : <p>User not found.</p>}</>
      )}
    </div>
  );
};

export default ViewProfile;
