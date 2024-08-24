import React, { useEffect, useState } from "react";
import { getCollectionPosts, getCollections } from "../../REST";
import { useParams } from "react-router-dom";
import PostsList from "../PostsList/PostsList";

const styles = {
  container: {
    marginBottom: "90px",
  },
};

const ViewCollection = () => {
  const { username, collectionName } = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getCollectionPosts(username, collectionName);
        console.log(postsData);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={styles.container}>
      <PostsList header={`Collection : ${collectionName}`} posts={posts} />
    </div>
  );
};

export default ViewCollection;
