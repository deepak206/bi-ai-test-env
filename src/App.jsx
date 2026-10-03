import React from 'react';
import Header from './components/Header';
import AnalyticsProducts from './components/AnalyticsProducts';
import AnalyticsUsers from './components/AnalyticsUsers';
import AnalyticsOrders from './components/AnalyticsOrders';
import AnalyticsRevenue from './components/AnalyticsRevenue';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="dashboard">
        <AnalyticsProducts />
        <AnalyticsUsers />
        <AnalyticsOrders />
        <AnalyticsRevenue />
      </div>
    </div>
  );
};

export default App;