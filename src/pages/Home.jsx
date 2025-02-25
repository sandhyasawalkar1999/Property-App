import React, { useState } from "react";
import Filter from "../componets/Fiter";
import PropertyList from "../componets/PropertyList";
import { properties } from "../data";

const Home = ({ favorites, toggleFavorite }) => {
  const [filters, setFilters] = useState({
    location: "",
    date: "",
    price: "",
    propertyType: "",
  });

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.location === "" || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.price === "" || property.price <= parseInt(filters.price)) &&
      (filters.propertyType === "" || filters.propertyType === "All" || property.type === filters.propertyType)
    );
  });

  return (
    <div className="p-4">
      <Filter filters={filters} setFilters={setFilters} />
      <PropertyList properties={filteredProperties} toggleFavorite={toggleFavorite} favorites={favorites} />
      {filteredProperties.length === 0 && <p className="text-center text-gray-500 mt-4">No properties match your criteria.</p>}
    </div>
  );
};

export default Home;
