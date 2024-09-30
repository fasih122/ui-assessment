import React, { useState } from 'react';
import { addPicture, deletePicture } from '../api';

const PictureGallery = ({ pictures, drinkId }) => {
  const [newPicture, setNewPicture] = useState(null);

  const handleAddPicture = async (e) => {
    e.preventDefault();
    if (!newPicture) return;

    try {
      await addPicture(drinkId, newPicture);
      alert('Picture added successfully');
      window.location.reload(); // Reload to show the updated picture gallery
    } catch (error) {
      alert('Failed to add picture');
    }
  };

  const handleDeletePicture = async (pictureId) => {
    try {
      await deletePicture(drinkId, pictureId);
      alert('Picture deleted successfully');
      window.location.reload(); // Reload to show the updated picture gallery
    } catch (error) {
      alert('Failed to delete picture');
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {pictures && pictures.map((picture) => (
          <div key={picture.id} className="relative group">
            <img
              src={`http://localhost:4000/public/` + picture.path}
              alt="root beer"
              className="w-full h-40 object-cover rounded"
            />
            <button
              onClick={() => handleDeletePicture(picture.id)}
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={handleAddPicture} className="mt-4">
        <label className="block mb-2 text-sm font-medium">Add a new picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewPicture(e.target.files[0])}
          className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer"
        />
        <button
          type="submit"
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Picture
        </button>
      </form>
    </div>
  );
};

export default PictureGallery;
