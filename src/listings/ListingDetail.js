import React from "react";


/**
 *  ListingDetail
 *
 *  Props:
 *    - listing: details from API as obj { listing }
 *
 *  State:
 *    - None
 *
 *  GetListingDetail -> ListingDetail -> JobCardList
 */

function ListingDetail({ listing }) {
  // console.log("ListingDetail");

  return (
    <div className="ListingDetail">

      <h2>{listing.title} </h2>
      <h4>{listing.description}</h4>

      {listing.images.map(i =>
        <img src={`${i.path}`} alt={`${listing.title}`} key={i.id}></img>)}

    </div>
  );
}

export default ListingDetail;