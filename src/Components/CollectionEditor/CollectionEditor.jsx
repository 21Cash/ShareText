import { useEffect, useState } from "react";
import { getCollectionPosts, uploadCollection } from "../../REST";
import { useParams, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  ref,
  getDatabase,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
    height: "80vh",
    margin: "0 auto 50px",
    padding: "3px 20px 20px 20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
    backgroundColor: darkBlue,
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    position: "relative",
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
    padding: "8px 12px",
    borderRadius: "4px",
    border: "none",
    color: white,
    backgroundColor: green,
    fontSize: "16px",
    marginLeft: "10px",
    transition: "background-color 0.3s, transform 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  removeButton: {
    cursor: "pointer",
    padding: "8px 12px",
    fontWeight: "bold",
    borderRadius: "4px",
    border: "none",
    color: "white",
    backgroundColor: red,
    fontSize: "16px",
    marginLeft: "10px",
    transition: "background-color 0.3s, transform 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#3498db",
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
  const navigate = useNavigate();

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

  const redirectToMessageScreen = () => {
    navigate(
      `/MessageScreen?textColor=green&msgText=${
        isNewPost ? "Collection Created !" : "Collection Updated !"
      }`
    );
  };

  const handleSubmit = () => {
    uploadCollection(collectionName, posts)
      .then(() => {
        redirectToMessageScreen();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      if (type === "post") {
        const sourceList =
          source.droppableId === "allPosts" ? filteredPosts : posts;
        const updatedList = Array.from(sourceList);

        const [removed] = updatedList.splice(source.index, 1);
        updatedList.splice(destination.index, 0, removed);

        if (source.droppableId === "allPosts") {
          setAllPosts(updatedList);
        } else {
          setPosts(updatedList);
        }
      }
    } else {
      const sourceList =
        source.droppableId === "allPosts" ? filteredPosts : posts;
      const destinationList =
        destination.droppableId === "allPosts" ? filteredPosts : posts;
      const updatedSourceList = Array.from(sourceList);
      const updatedDestinationList = Array.from(destinationList);

      const [removed] = updatedSourceList.splice(source.index, 1);

      updatedDestinationList.splice(destination.index, 0, removed);

      if (source.droppableId === "allPosts") {
        setAllPosts(updatedSourceList);
      } else {
        setPosts(updatedSourceList);
      }

      if (destination.droppableId === "allPosts") {
        setAllPosts(updatedDestinationList);
      } else {
        setPosts(updatedDestinationList);
      }
    }
  };

  const getUniqueId = (post, index) => `post-${post}-${index}`;

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
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={styles.listContainer}>
          <Droppable droppableId="allPosts" type="post">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={styles.list}
              >
                <h2>All Posts</h2>
                {filteredPosts.map((post, index) => (
                  <Draggable
                    key={getUniqueId(post, index)}
                    draggableId={getUniqueId(post, index)}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...styles.listItem,
                          ...provided.draggableProps.style,
                        }}
                      >
                        <span style={styles.postTitle}>{post}</span>
                        <button
                          style={styles.button}
                          onClick={() => addPost(post)}
                        >
                          ✔
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="posts" type="post">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={styles.list}
              >
                <h2>Current Collection</h2>
                {posts.map((post, index) => (
                  <Draggable
                    key={getUniqueId(post, index)}
                    draggableId={getUniqueId(post, index)}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...styles.listItem,
                          ...provided.draggableProps.style,
                        }}
                      >
                        <span style={styles.postTitle}>{post}</span>
                        <button
                          style={styles.removeButton}
                          onClick={() => removePost(post)}
                        >
                          X
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <button onClick={handleSubmit} style={styles.submitButton}>
        {isNewPost ? "Submit" : "Update Collection"}
      </button>
    </div>
  );
};

export default CollectionEditor;
