import React, { useEffect, useState } from 'react';

const AnalyticsOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders/analytics');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching order analytics:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order Analytics</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.date}: {order.total}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsOrders;