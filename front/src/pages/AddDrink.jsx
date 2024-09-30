import React from 'react';
import AddDrinkForm from '../components/AddDrinkForm';

const AddDrink = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Root Beer</h1>
      <AddDrinkForm />
    </div>
  );
};

export default AddDrink;
