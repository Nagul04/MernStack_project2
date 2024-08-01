import React, { useState, useEffect, useRef } from 'react';
import './Post.css';

const friends = [
  'Das', 'Maddy54', 'Nckx', 'Rudresh', 'Arun', 'Bala', 'Chitra', 'Divya', 'Eashwar', 'Gopi',
  'Hari', 'Ishaan', 'Jay', 'Kiran', 'Lakshmi', 'Meera', 'Naveen', 'Om', 'Pooja', 'Qadir',
  'Ravi', 'Sita', 'Tina', 'Uma', 'Vikram', 'Waseem', 'Xavier', 'Yamini', 'Zara', 'Ashok',
  'Bhuvana', 'Charan', 'Devi', 'Esha', 'Farhan', 'Gayathri', 'Harish', 'Indira', 'Jeeva', 'Kalai',
  'Latha', 'Manoj', 'Neha', 'Oviya', 'Pranav', 'Ramesh', 'Santhosh', 'Trisha', 'Uday', 'Vinod',
  'Akash', 'Bhargavi', 'Chetan', 'Deepa', 'Ebin', 'Fathima', 'Gautam', 'Hemant', 'Ira', 'Jagan',
  'Kavi', 'Lavanya', 'Mani', 'Nikhil', 'Ojas', 'Pari', 'Rohit', 'Suresh', 'Tarun', 'Usha',
  'Varun', 'Wendy', 'Xena', 'Yash', 'Zaid', 'Anitha', 'Bhavesh', 'Chandru', 'Dinesh', 'Eswar',
  'Fiona', 'Giri', 'Hema', 'Imran', 'Jaya', 'Karthik', 'Lalitha', 'Mahesh', 'Nisha', 'Omi',
  'Pavan', 'Ritu', 'Sagar', 'Tejas', 'Urvashi', 'Vishal', 'Winston', 'Xavi', 'Yogesh', 'Zubin'
];

const Post = React.forwardRef(({ post }, ref) => {
  const [likes, setLikes] = useState(() => post.likes || Math.floor(Math.random() * 101));
  const [hasLiked, setHasLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [commented, setCommented] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [showFriends, setShowFriends] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [editingComment, setEditingComment] = useState(null);
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, index: null });

  const handleLike = () => {
    setLikes(hasLiked ? likes - 1 : likes + 1);
    setHasLiked(!hasLiked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!commented) {
      if (editingComment !== null) {
        const updatedComments = comments.map((cmt, index) => index === editingComment ? comment : cmt);
        setComments(updatedComments);
        setEditingComment(null);
      } else {
        setComments([comment]);
      }
      setCommented(true);
    }
    setComment('');
    setShowCommentBox(false);
  };

  const handleEditComment = () => {
    setComment(comments[contextMenu.index]);
    setEditingComment(contextMenu.index);
    setShowCommentBox(true);
    setContextMenu({ ...contextMenu, visible: false });
  };

  const handleDeleteComment = () => {
    setComments(comments.filter((_, i) => i !== contextMenu.index));
    setCommented(false);
    setContextMenu({ ...contextMenu, visible: false });
  };

  const handleShare = () => {
    setShowFriends(!showFriends);
  };

  const shareWithFriend = (friend) => {
    alert(`Shared with ${friend}`);
    setShowFriends(false);
  };

  const handleContextMenu = (e, index) => {
    e.preventDefault();
    setContextMenu({ visible: true, x: e.clientX, y: e.clientY, index });
  };

  const handleClickOutside = (e) => {
    if (contextMenu.visible && !e.target.closest('.context-menu')) {
      setContextMenu({ ...contextMenu, visible: false });
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [contextMenu]);

  return (
    <div className="post" ref={ref}>
      <div className="post-header">
        <img src={`https://via.placeholder.com/30?text=${post.id}`} alt="User avatar" />
        <span>User {post.id}</span>
      </div>
      <img src={post.url} alt={post.title} className="post-image" />
      <div className="post-footer">
        <span>{post.title}</span>
        <div className="post-actions">
          <button onClick={handleLike} className={hasLiked ? 'liked' : 'not-liked'}>
            <img src="https://img.icons8.com/ios-filled/50/000000/like.png" alt="Like" />
            {likes}
          </button>
          <button onClick={() => setShowCommentBox(!showCommentBox)}>
            <img src="https://img.icons8.com/ios-filled/50/000000/comments.png" alt="Comment" />
          </button>
          <button onClick={handleShare}>
            <img src="https://img.icons8.com/ios-filled/50/000000/share.png" alt="Share" />
          </button>
        </div>
        {showCommentBox && (
          <form onSubmit={handleComment} className="comment-form">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              disabled={commented}
            />
            <button type="submit">{editingComment !== null ? 'Update' : 'Post'}</button>
          </form>
        )}
        <div className="post-comments">
          {comments.map((cmt, index) => (
            <div key={index} className="comment" onContextMenu={(e) => handleContextMenu(e, index)}>
              <p>{cmt}</p>
            </div>
          ))}
        </div>
        {contextMenu.visible && (
          <div className="context-menu" style={{ top: contextMenu.y, left: contextMenu.x }}>
            <button onClick={handleEditComment}>Edit</button>
            <button onClick={handleDeleteComment}>Delete</button>
          </div>
        )}
        {showFriends && (
          <div className="friends-list">
            {friends.map((friend, index) => (
              <button key={index} onClick={() => shareWithFriend(friend)}>
                {friend}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default Post;
