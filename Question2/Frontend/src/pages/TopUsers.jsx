import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

function TopUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then(res => setUsers(res.data.topUsers))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Top 5 Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default TopUsers;
