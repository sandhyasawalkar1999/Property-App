import React from "react";

const Filter = ({ filters, setFilters }) => {
  const prices = [2000, 5000, 10000, 50000, 100000];
  const propertyTypes = ["All", "Villa", "Apartment", "House"];

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex flex-wrap gap-4">
      <input
        type="text"
        name="location"
        value={filters.location}
        onChange={handleChange}
        placeholder="Enter City"
        className="p-2 text-xl border rounded w-full md:w-1/4"
      />

      <input
        type="date"
        name="date"
        value={filters.date}
        onChange={handleChange}
        className="p-2 text-xl border rounded w-full md:w-1/4"
      />

      <select name="price" value={filters.price} onChange={handleChange} className="p-2 border text-xl rounded w-full md:w-1/4">
        <option value="">Select a Price</option>
        {prices.map((price, index) => (
          <option key={index} value={price}>{`Rs ${price}`}</option>
        ))}
      </select>

      <select name="propertyType" value={filters.propertyType} onChange={handleChange} className="p-2 text-xl border rounded w-full md:w-1/4">
        {propertyTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
