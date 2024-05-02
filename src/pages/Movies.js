import React, { useState } from 'react';
import MovieList from '../components/MovieList';



export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>This is the movies page</h2>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <MovieList searchQuery={searchQuery} />
    </div>
  );
}
