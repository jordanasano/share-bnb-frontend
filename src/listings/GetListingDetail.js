import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListingDetail from "./ListingDetail";
import ShareBNBApi from "../api";

/** TODO:
 *  GetCompanyDetail
 *
 *  Props:
 *    - None
 *
 *  State:
 *    - company: details from API as obj { company }
 *
 *  RoutesList -> GetCompanyDetail -> CompanyDetail
 */

function GetListingDetail() {

  const { id } = useParams();
  const [listing, setListing] = useState(null);

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