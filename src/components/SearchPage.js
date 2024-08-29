import React, { useState } from 'react';
import { data } from './data';

const SearchPage = () => {

  const items = data;
  const [query, setQuery] = useState('');


  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Search your favourite fruit</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {query && (
        <ul className="bg-gray-50 rounded-lg p-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="p-2 mb-1 rounded hover:bg-blue-100 cursor-pointer text-gray-700"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500 italic">No items found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
