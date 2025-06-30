import React from 'react';
import { useLocation } from 'react-router-dom';
import categoryData from './Constants/categoryData'
const Search = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q')?.toLowerCase() || '';

  const allItems = Object.values(categoryData).flat();

  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(query)
  );
  return (
    <div className="p-6 max-w-6xl h-[700px] mx-auto">
      <h1 className="text-xl font-semibold mb-4">Search Results for: "{query}"</h1>

      {filteredItems.length === 0 ? (
        <p className="text-gray-500">No matching courses found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map(({ name, link, image }) => (
            <a
              key={link}
              href={link}
              className="flex items-center gap-3 p-4 border rounded hover:shadow hover:bg-gray-50"
            >
              <img src={image} alt={name} className="w-12 h-12 object-cover rounded" />
              <span className="text-sm text-gray-800">{name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
