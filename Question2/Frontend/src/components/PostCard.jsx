import React from 'react';

const PostCard = ({ post }) => {
  const imageUrl = `https://picsum.photos/600/300?random=${post.id}`;

  return (
    <div className="bg-white shadow-lg rounded-lg m-4 overflow-hidden hover:shadow-xl transition-shadow">
      <img src={imageUrl} alt="Post" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold mb-2">UserID: {post.userid}</h3>
        <p className="text-gray-700 mb-2">{post.content}</p>
        {post.commentCount !== undefined && (
          <p className="text-gray-500">💬 Comments: {post.commentCount}</p>
        )}
      </div>
    </div>
  );
};

export default PostCard;
