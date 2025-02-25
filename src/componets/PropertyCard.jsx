import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { TbSquareRotated } from "react-icons/tb";




const PropertyCard = ({ property, toggleFavorite, isFavorite }) => {
  return (
    <>

      <div className="border m-10 w-100 p-0 rounded-lg shadow-md bg-white">
        <div>
          <img src={property.image} alt={property.name} className="w-full h-80 object-cover rounded-md" />

        </div>
        <div className="p-4">
          <h1 className="text-3xl font-bold mt-2">{property.name}</h1>
          <br />
          <h2 className="text-gray-600 text-xl ">{property.location} - ${property.price}</h2>
          <h2 className="text-xl">{property.type} | {property.available ? "Available" : "Not Available"}</h2>
          <br />
          <hr />
          <br />
          <div className="flex justify-around" >
            <div className="flex items-center text-xl  text-red"><span className="mr-2" ><IoBedOutline /></span> 5Beds</div>
            <div className="flex items-center text-xl  text-red"><span className="mr-2" ><FaBath />
            </span> 5Beds</div>
            <div className="flex items-center text-xl  text-red"><span className="mr-2" ><TbSquareRotated />
            </span> 120 *450</div>
          </div>
          <button
            onClick={() => toggleFavorite(property)}
            className={`mt-2 p-2 w-full rounded text-2xl ${isFavorite ? "bg-red-500 text-white" : "bg-purple-500 text-white"}`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>

      </div >
    </>
  );
};

export default PropertyCard;
