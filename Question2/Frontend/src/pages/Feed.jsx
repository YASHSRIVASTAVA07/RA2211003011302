import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); // Poll every 5s for real-time effect
    return () => clearInterval(interval);
  }, []);

  const fetchPosts = () => {
    axios.get('http://localhost:5000/api/posts?type=latest')
      .then(response => {
        setPosts(response.data.posts);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Live Feed</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="border p-2 m-2">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
