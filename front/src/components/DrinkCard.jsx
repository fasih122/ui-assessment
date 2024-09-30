import React from 'react';
import { Link } from 'react-router-dom';

const DrinkCard = ({ drink }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-xl font-semibold">{drink.name}</h2>
      <p className="text-gray-600">{drink.description}</p>
      <p>Rating: {drink.reviewAverageRating ?? 'No reviews yet'}</p>
      <Link to={`/drink/${drink.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
};

export default DrinkCard;
