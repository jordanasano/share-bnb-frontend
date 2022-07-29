import React from "react";
import { Link } from "react-router-dom";

/** TODO:
 *  CompanyCard
 *
 *  Props:
 *    - company: details from API as obj { company }
 *
 *  State:
 *    - None
 *
 *  CompanyCardList -> CompanyCard
 */

function ListingCard({ listing }) {
  // console.log("CompanyCard");

  return (
    <div className="ListingCard">
      <Link to={`/listings/${listing.id}`}>
        {listing.title}
      </Link>
      <p>{listing.description}</p>
      <p>Per day: ${listing.price_per_day}</p> 
       {listing.images[0] &&
        <img src={`${listing.images[0].path}`} alt={`${listing.title}`}></img>
      }
      <hr></hr>
    </div>
  );
}

export default ListingCard;