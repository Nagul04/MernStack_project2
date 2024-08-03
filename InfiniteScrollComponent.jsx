import React, { useState, useEffect, useRef, useCallback } from 'react';
import Post from './Post';
import './InfiniteScrollComponent.css';
import test1 from './test1.json';
import test2 from './test2.json';

const customPosts = [
  { id: 1, url: test1.data[0].url },
  { id: 2, url: test1.data[1].url },
  { id: 3, url: test1.data[2].url },
  { id: 4, url: test2.data.find(item => item.id === "yTvddccckkBAEM").url }
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
    const newPosts = getRandomPosts(customPosts); 
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLoading(false);
  };

  const lastPostElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  return (
    <div className="infinite-scroll-component">
      {posts.map((post, index) => {
        if (index === posts.length - 1) {
          return <Post ref={lastPostElementRef} key={index} post={post} />;
        }
        return <Post key={index} post={post} />;
      })}
      {loading && <p>Loading more posts...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
