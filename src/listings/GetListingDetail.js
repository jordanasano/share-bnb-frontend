import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListingDetail from "./ListingDetail";
import ShareBNBApi from "../api";

/**
 *  GetListingDetail
 *
 *  Props:
 *    - None
 *
 *  State:
 *    - listing: details from API as obj { listing }
 *
 *  RouteList -> GetListingDetail -> ListingDetail
 */

function GetListingDetail() {

  const { id } = useParams();
  const [ listing, setListing ] = useState(null);

  /** Get listing on mount using id in url param */
  useEffect(function fetchListing() {
    async function getListing() {
      const listing = await ShareBNBApi.getListing(id);
      setListing(l => listing);
    }
    getListing();

  }, [id]);

  return (
    <div className="GetListingDetail">
      {listing
        ? <ListingDetail listing={listing} />
        : <p>Loading... </p>
      }
    </div>
  );
}

export default GetListingDetail;