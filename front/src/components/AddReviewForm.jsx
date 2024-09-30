import React, { useState } from 'react';
import { addReview } from '../api';

const AddReviewForm = ({ drinkId }) => {
  const [form, setForm] = useState({ rating: '', comment: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReview(drinkId, form);
      alert('Review added');
    } catch (err) {
      alert('Error adding review');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block">Rating</label>
        <input
          type="number"
          min="1"
          max="5"
          className="border-gray-300 p-2 rounded"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block">Comment</label>
        <textarea
          className="border-gray-300 p-2 rounded"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Submit Review
      </button>
    </form>
  );
};

export default AddReviewForm;
