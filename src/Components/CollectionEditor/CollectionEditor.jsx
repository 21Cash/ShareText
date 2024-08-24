import { useEffect, useState } from "react";
import { getCollectionPosts, uploadCollection } from "../../REST";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  ref,
  getDatabase,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";

const darkBlue = "#1e2a3a";
const lightBlue = "#3f5176";
const darkGrey = "#333333";
const lightGrey = "#f5f5f5";
const red = "#f44336";
const green = "#4caf50";
const white = "#ffffff";

const styles = {
  container: {
    maxWidth: "1100px",
    height: "75vh",
    margin: "0 auto 50px",
    padding: "3px 20px 20px 20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
    backgroundColor: darkBlue,
    color: "#ffffff",
    display: "flex",
    flexDirection: "column", // Stack items vertically
    position: "relative", // Added for positioning the button
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
  searchInput: {
    width: "98%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  listContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    height: "100%",
    overflow: "hidden",
  },
  list: {
    flex: 1,
    backgroundColor: lightBlue,
    padding: "10px",
    borderRadius: "8px",
    minHeight: "0",
    overflowY: "auto",
  },
  button: {
    cursor: "pointer",
    padding: "5px",
    borderRadius: "4px",
    border: "none",
    color: white,
    backgroundColor: green,
    fontSize: "16px",
    marginLeft: "10px",
  },
  removeButton: {
    cursor: "pointer",
    padding: "5px",
    borderRadius: "4px",
    border: "none",
    color: white,
    backgroundColor: red,
    fontSize: "16px",
    marginLeft: "10px",
  },
  input: {
    width: "98%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  submitButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    color: white,
    backgroundColor: green,
    fontSize: "16px",
  },
};

const CollectionEditor = ({ isNewPost = false }) => {
  const { collectionName: initialCollectionName } = useParams();
  const [username, setUsername] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [collectionName, setCollectionName] = useState(initialCollectionName);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const email = user.email;
        const _username = email.substring(0, email.indexOf("@"));
        setUsername(_username);

        const currentUID = user.uid;
        const db = getDatabase();
        const postsRef = ref(db, "posts");
        const queryForUID = query(
          postsRef,
          orderByChild("uid"),
          equalTo(currentUID)
        );

        try {
          const snapshot = await get(queryForUID);
          const postKeys = [];
          snapshot.forEach((childSnapshot) => {
            const postKey = childSnapshot.key;
            postKeys.push(postKey);
          });

          setAllPosts(postKeys);

          if (collectionName) {
            try {
              const collectionPosts = await getCollectionPosts(
                _username,
                collectionName
              );
              setPosts(collectionPosts);

              // Remove collection posts from all posts
              const filteredPosts = postKeys.filter(
                (post) => !collectionPosts.includes(post)
              );
              setAllPosts(filteredPosts);
            } catch (error) {
              console.error("Error fetching collection posts:", error);
            }
          }
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const removePost = (post) => {
    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.filter((item) => item !== post);
      setAllPosts((prevAllPosts) => [...prevAllPosts, post]);
      return updatedPosts;
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = allPosts.filter((post) =>
    post.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addPost = (post) => {
    setPosts((prevPosts) => {
      if (!prevPosts.includes(post)) {
        const updatedPosts = [...prevPosts, post];
        setAllPosts((prevAllPosts) =>
          prevAllPosts.filter((item) => item !== post)
        );
        return updatedPosts;
      }
      return prevPosts;
    });
  };

  const handleCollectionNameChange = (e) => {
    setCollectionName(e.target.value);
  };

  const handleSubmit = () => {
    uploadCollection(collectionName, posts);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        {isNewPost
          ? "Create New Collection"
          : `Edit Collection: ${collectionName}`}
      </h1>
      {isNewPost && (
        <input
          type="text"
          placeholder="Enter new collection name..."
          value={collectionName}
          onChange={handleCollectionNameChange}
          style={styles.input}
        />
      )}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={handleSearch}
        style={styles.searchInput}
      />
      <div style={styles.listContainer}>
        <div style={styles.list}>
          <h2>All Posts</h2>
          {filteredPosts.length === 0 && <p>No posts available.</p>}
          {filteredPosts.map((post) => (
            <div key={post} style={styles.listItem}>
              <span style={styles.postTitle}>{post}</span>
              <button style={styles.button} onClick={() => addPost(post)}>
                ✔
              </button>
            </div>
          ))}
        </div>
        <div style={styles.list}>
          <h2>Selected Posts</h2>
          {posts.length === 0 && <p>No posts in collection.</p>}
          {posts.map((post) => (
            <div key={post} style={styles.listItem}>
              <span style={styles.postTitle}>{post}</span>
              <button
                style={styles.removeButton}
                onClick={() => removePost(post)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
      <button style={styles.submitButton} onClick={handleSubmit}>
        {isNewPost ? "Submit Collection" : "Upload Collection"}
      </button>
    </div>
  );
};

export default CollectionEditor;
