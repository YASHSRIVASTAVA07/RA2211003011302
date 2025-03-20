import React from 'react';

const UserCard = ({ user }) => {
  const avatar = `https://i.pravatar.cc/150?img=${user.id + 20}`; // Random avatar

  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 m-2 hover:scale-105 transition-transform">
      <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-gray-500">Posts: {user.postCount}</p>
      </div>
    </div>
  );
};

export default UserCard;
