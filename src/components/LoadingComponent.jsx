import React from 'react';

const LoadingComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ border: '16px solid #f3f3f3', borderTop: '16px solid #3498db', borderRadius: '50%', width: '120px', height: '120px', animation: 'spin 2s linear infinite' }}></div>
      <p style={{ marginLeft: '20px', fontSize: '20px', color: '#333' }}>Loading...</p>
    </div>
  );
};

export default LoadingComponent;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}