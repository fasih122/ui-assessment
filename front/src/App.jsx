import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddDrink from './pages/AddDrink';
import DrinkDetailsPage from './pages/DrinkDetailsPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="/add-drink" element={<AddDrink />} />
          <Route path="/drink/:drinkId" element={<DrinkDetailsPage />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
