"use client";

import SearchManufacturer from "./SearchManufacturer";
import {useState} from 'react'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch = () => {};
  
  return (
  <form className="searchbar" onSubmit={handleSearch}>
    <div className="searchbar__iten">
      <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
    </div>
  </form>
  );
};

export default SearchBar;
