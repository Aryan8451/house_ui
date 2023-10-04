import React from "react";
import { Link } from "react-router-dom";
const Card = ({id,disableLink, image, title, location, price_per_month, listing_type }) => 
{
  
  return (
    <>
      <Link className="card " to={`/property/${id}`} >
        <div className="card-img">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{location}</p>
          
        </div>
        <div className="card-body2">
          <div className="card-price">
            <p className="card-text2  ">{price_per_month}</p>
          <p >/month</p>
          </div>
          
          <a href="#" className="btn btn-outline-primary">
            view
          </a>
        </div>
        <p className="card-text1">{listing_type}</p>
      </Link>
    </>
  );
};

export default Card;
