import React, { useState, useEffect, useRef, useCallback } from 'react';
import Post from './Post';
import './InfiniteScrollComponent.css';
import MadhanImage from './MADHAN.png';
import KJKRDASImage from './KJKRDAS.png';
import NagulImage from './NAGUL.jpg';
import Nagul2Image from './NAGUL2.png';

const customPosts = [
  { id: 1, url: MadhanImage },
  { id: 2, url: KJKRDASImage },
  { id: 3, url: NagulImage },
  { id: 4, url: Nagul2Image }
];

const getRandomPosts = (posts) => {
  return posts
    .map((post) => ({ ...post }))
    .sort(() => Math.random() - 0.5);
};

const InfiniteScrollComponent = () => {
  const [posts, setPosts] = useState(getRandomPosts(customPosts));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchPosts = async (page) => {
    setLoading(true);
    const newPosts = customPosts.map(post => ({
      ...post,
      id: post.id + page * customPosts.length
    }));
    setPosts((prevPosts) => [...prevPosts, ...getRandomPosts(newPosts)]);
    setLoading(false);
  };

  useEffect(() => {
    if (page > 1) fetchPosts(page);
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
    <div className="feed-container">
      <h1>Lynk</h1>
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

export default InfiniteScrollComponent;
