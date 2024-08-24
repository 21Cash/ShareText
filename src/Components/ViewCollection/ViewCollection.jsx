import React, { useEffect, useState } from "react";
import { getCollectionPosts, getCollections } from "../../REST";
import { useParams } from "react-router-dom";
import PostsList from "../PostsList/PostsList";

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
    <>
      <PostsList header={collectionName} isCurrentViewer={true} posts={posts} />
    </>
  );
};

export default ViewCollection;
