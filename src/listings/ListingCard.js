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
      {/* {listing.logoUrl &&
        <img src={`${company.logoUrl}`} alt={`${company.name}`}></img>
      } */}
      <hr></hr>
    </div>
  );
}

export default ListingCard;