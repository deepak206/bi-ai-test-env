import React, { useEffect, useState } from 'react';

const AnalyticsRevenue = () => {
  const [revenue, setRevenue] = useState([]);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const response = await fetch('/api/revenue/analytics');
        const data = await response.json();
        setRevenue(data);
      } catch (error) {
        console.error('Error fetching revenue analytics:', error);
      }
    };

    fetchRevenue();
  }, []);

  return (
    <div>
      <h2>Revenue Analytics</h2>
      <ul>
        {revenue.map(rev => (
          <li key={rev.id}>{rev.date}: ${rev.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsRevenue;