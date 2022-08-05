import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

function GetListingDetail({deleteListing}) {

  const { id } = useParams();
  const [ listing, setListing ] = useState(null);
  const navigate = useNavigate();

  /** Get listing on mount using id in url param */
  useEffect(function fetchListing() {
    async function getListing() {
      const listing = await ShareBNBApi.getListing(id);
      setListing(l => listing);
    }
    getListing();

  }, [id]);

  async function handeClick() {
    try {
      await deleteListing(listing.id);
      navigate("/listings");
    } catch(err) {
      throw new Error(err);
    }
  }

  return (
    <div className="GetListingDetail">
      {listing
        ? (
            <>
              <ListingDetail listing={listing} />
              <button onClick={handeClick}>Delete listing!</button>
            </>
        )
        : <p>Loading... </p>
      }
    </div>
  );
}

export default GetListingDetail;