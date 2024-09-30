import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkDetails, getReviews, getPictures } from '../api';
import AddReviewForm from '../components/AddReviewForm';
import PictureGallery from '../components/PictureGallery';

const DrinkDetailsPage = ({ match }) => {
  const { drinkId } = useParams();
  const [drink, setDrink] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [drinkResponse, reviewResponse] = await Promise.all([
        getDrinkDetails(drinkId),
        getReviews(drinkId, { length:10, offset:0 }),
      ]);
      setDrink(drinkResponse.data);
      setReviews(reviewResponse.data.items)
      setPictures(drinkResponse.data.Pictures);
    };
    fetchData();
  }, [drinkId]);

  if (!drink) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{drink.name}</h1>
      <p>{drink.description}</p>
      <h2 className="text-xl font-bold mt-6">Reviews</h2>
      {reviews.length === 0 ? <p>No reviews yet.</p> : <ul>{reviews.map((review) => (
        <li key={review.id}>{review.description} - Rating: {review.rating}</li>
      ))}</ul>}
      <AddReviewForm drinkId={drinkId} />
      <h2 className="text-xl font-bold mt-6">Pictures</h2>
      <PictureGallery pictures={pictures} drinkId={drinkId} />
    </div>
  );
};

export default DrinkDetailsPage;
