import React from 'react';
import SearchComponent from './components/SearchComponent';

const App = () => {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Welcome to My Application</h1>
      </header>
      <main className='app-main'>
        <SearchComponent onSearch={handleSearch} />
      </main>
    </div>
  );
};

export default App;