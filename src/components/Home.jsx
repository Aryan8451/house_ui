import React, { useState } from "react";
import Card from "./Card";
import propertyData from "../content.js";
import "../css/Home.css";
import PropertyPage from "./PropertyPage";
const Home = () => {
  const [displayedProperties, setDisplayedProperties] = useState(6);
  const showMoreProperties = () => {
    setDisplayedProperties(displayedProperties + 3);
  };
  return (
    <>
      <div className="container">
      <div className="card-container">
        {propertyData.slice(0, displayedProperties).map((item) => (
          <Card
            image={item.image}
            price_per_month={item.price_per_month}
            location={item.location}
            listing_type={item.listing_type}
            id={item.id}
            key={item.id}
          />
        ))}
        </div>
      </div>
      {displayedProperties < propertyData.length && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={showMoreProperties}>
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
