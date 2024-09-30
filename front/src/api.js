import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});

export const getDrinks = (params) => api.get('/drinks', { params });
export const getDrinkDetails = (id) => api.get(`/drinks/${id}`);
export const createDrink = (data) => api.post('/drinks', data, {
  headers: {
    'Content-Type': 'application/json'
  }});
export const getReviews = (drinkId, params) => api.get(`/drinks/${drinkId}/reviews`, { params });
export const addReview = (drinkId, data) => api.post(`/drinks/${drinkId}/reviews`, data);
export const getPictures = (drinkId) => api.get(`/drinks/${drinkId}/pictures`);
export const addPicture = (drinkId, file) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post(`/drinks/${drinkId}/pictures`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};
export const deletePicture = (drinkId, pictureId) => api.delete(`/drinks/${drinkId}/pictures/${pictureId}`);
