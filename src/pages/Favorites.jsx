import React from "react";
// import PropertyList from "../components/PropertyList";
import PropertyList from "../componets/PropertyList";
const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Favorite Properties</h2>
      <PropertyList properties={favorites} toggleFavorite={toggleFavorite} favorites={favorites} />
    </div>
  );
};

export default Favorites;
