import React from 'react';
import Navbar from './Navbar';
import Stories from './Stories';
import InfiniteScrollComponent from './InfiniteScrollComponent';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="content">
        <header className="app-header">
          <h1>LYNK</h1>
        </header>
        <Navbar />
        <Stories />
        <InfiniteScrollComponent />
      </div>
    </div>
  );
};

export default App;




