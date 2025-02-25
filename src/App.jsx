import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { IoMdHome } from "react-icons/io";


const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (property) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === property.id)
        ? prev.filter((fav) => fav.id !== property.id)
        : [...prev, property]
    );
  };

  return (

    <Router>
      <nav className="p-4 bg-purple-700 font-sans text-3xl text-white flex justify-around">
        <Link to="/">  <span>Home</span>

        </Link>
        <Link to="/favorites">Favorites ({favorites.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
      </Routes>
    </Router>

  );
};

export default App;
