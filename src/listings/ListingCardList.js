import React from "react";
import ListingCard from "./ListingCard";


/** TODO:
 *  CompanyCardList
 *
 *  Props:
 *    - companies: array of companies from API [ {company}, ... ]
 *
 *  State:
 *    - None
 *
 *  GetCompanyCardList -> CompanyCardList -> CompanyCard
 */

function ListingCardList({ listings }) {
  // console.log("CompanyCardList");

  return (
    <div className="ListingCardList">
      {listings.map(l =>
        <ListingCard key={l.id} listing={l} />
      )}

    </div>
  );
}

export default ListingCardList;