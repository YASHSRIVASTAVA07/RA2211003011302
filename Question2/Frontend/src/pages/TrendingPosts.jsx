import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🔥 Top 5 Active Users</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default TopUsers;
