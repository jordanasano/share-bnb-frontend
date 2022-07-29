import React from "react";
import ListingCard from "./ListingCard";


/**
 *  ListingCardList
 *
 *  Props:
 *    - companies: array of lompanies from API [ { listing }, ... ]
 *
 *  State:
 *    - None
 *
 *  GetListingCardList -> ListingCardList -> ListingCard
 */

function ListingCardList({ listings }) {
  // console.log("ListingCardList");

  return (
    <div className="ListingCardList">

      <h2>Listings</h2>

      {listings.map(l =>
        <ListingCard key={l.id} listing={l} />
      )}

    </div>
  );
}

export default ListingCardList;