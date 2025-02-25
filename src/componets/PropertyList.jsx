import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties, toggleFavorite, favorites }) => {
  return (
    <div className="flex justify-around flex-wrap">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some((fav) => fav.id === property.id)}
        />
      ))}
    </div>
  );
};

export default PropertyList;
