import React, { useState } from 'react';
import { createDrink } from '../api';

const AddDrinkForm = () => {
  const [form, setForm] = useState({ name: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDrink(form);
      alert('Drink added successfully');
    } catch (err) {
      alert('Error adding drink');
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          className="w-full border-gray-300 p-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          className="w-full border-gray-300 p-2 rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Drink
      </button>
    </form>
  );
};

export default AddDrinkForm;
