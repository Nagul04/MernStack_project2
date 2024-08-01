import React, { useState, useEffect, useRef, useCallback } from 'react';
import Post from './Post';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchPosts = async (page) => {
    setLoading(true);
    // Replace with your API call
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
    const data = await response.json();
    setPosts((prevPosts) => [...prevPosts, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const lastPostRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading]);

  return (
    <div className="feed">
      {posts.map((post, index) => {
        if (index === posts.length - 1) {
          return <Post ref={lastPostRef} key={post.id} post={post} />;
        } else {
          return <Post key={post.id} post={post} />;
        }
      })}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Feed;
