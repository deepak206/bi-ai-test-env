import React, { useEffect, useState } from 'react';

const AnalyticsUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users/analytics');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user analytics:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Analytics</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}: {user.activeUsers}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsUsers;