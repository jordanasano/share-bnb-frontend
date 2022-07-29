import React from "react";
import { Link } from "react-router-dom";
import "./ListingCard.css";


/**
 *  ListingCard
 *
 *  Props:
 *    - listing: details from API as obj { listing }
 *
 *  State:
 *    - None
 *
 *  ListingCardList -> ListingCard
 */

function ListingCard({ listing }) {
  // console.log("ListingCard");

  return (
    <div className="ListingCard">
      <div className="ListingCard-text">
        <Link to={`/listings/${listing.id}`}>
          <h4>{listing.title}</h4>
        </Link>
        <p>Per day: ${listing.price_per_day}</p>
        <p>Location: {listing.location}</p>
        <p>{listing.description}</p>
      </div>
      {listing.images[0] &&
        <img src={`${listing.images[0].path}`} alt={`${listing.title}`}></img>
      }
    </div>
  );
}

export default ListingCard;