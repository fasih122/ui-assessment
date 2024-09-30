import React, { useState, useEffect } from 'react';
import { getDrinks } from '../api';
import DrinkCard from '../components/DrinkCard';
import SearchForm from '../components/SearchForm';

const Dashboard = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await getDrinks({ sort: 'createdAt', desc: true, length:20, offset:0 });
      setDrinks(response.data.items);
    };
    fetchDrinks();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recently Added Root Beers</h1>
      <SearchForm setDrinks={setDrinks} />
      <div>
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
