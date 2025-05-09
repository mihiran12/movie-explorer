import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ccc',
      borderRadius: '30px',
      padding: '0.5rem 1rem',
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      width: '100%',
    }}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          fontSize: '1rem',
          fontFamily: 'Segoe UI, sans-serif',
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#003366',
          color: '#E1E8EB',
          border: 'none',
          borderRadius: '20px',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          fontWeight: '500',
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
