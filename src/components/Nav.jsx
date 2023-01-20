import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
   
      <nav className>
  
        <h6>My Weather App</h6>
          <SearchBar onSearch={onSearch}/>
      </nav>
    
  );
};

export default Nav;
