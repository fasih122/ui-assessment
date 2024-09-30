import React, { useState } from 'react';
import { getDrinks } from '../api';

const SearchForm = ({ setDrinks }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await getDrinks({ sort: 'createdAt', desc: true, length:20, offset:0, name: searchTerm });
      setDrinks(response.data.items);
    } catch (error) {
      alert('Search failed');
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex space-x-4 mb-6">
      <input
        type="text"
        placeholder="Search root beers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 border-gray-300 p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
