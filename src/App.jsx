import React, { useState, useEffect } from 'react';
import LoadingComponent from './components/LoadingComponent';
import Header from './components/Header';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      {isLoading ? <LoadingComponent /> : <div style={{ padding: '20px' }}>Welcome to the Homepage!</div>}
    </div>
  );
};

export default App;
