import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#3498db', color: '#fff' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>My App</div>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
