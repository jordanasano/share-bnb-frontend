import React, { useState, useEffect } from "react";
// import SearchForm from "./SearchForm";
import ListingCardList from "./ListingCardList";
import ShareBNBApi from "../api";

/**
 *  GetListingCardList
 *
 *  Props:
 *    - None
 *
 *  State:
 *    - listings: array of listings from API [ { listing }, ... ]
 *
 *  RouteList -> GetListingCardList -> ListingCardList
 */

function GetListingCardList() {
  const [listings, setListings] = useState(null);
  // const [searchTerm, setSearchTerm] = useState(null);

  /** Get all listings on mount */
  useEffect(function fetchListingsFromAPI() {
    async function getListings() {
      const listings = await ShareBNBApi.getListings();
      setListings(l => listings);
    }
    getListings();
    }, []);

  // /** Get search term from form and set in state */
  // function updateSearchTerm(formData) {
  //   const term = formData.name;
  //   setSearchTerm(t => term);
  // }

  return (
    <div className="GetListingCardList">

      {listings
        ? <ListingCardList listings={listings} />
        : <p>Loading... </p>
      }

      {listings && listings.length === 0 &&
        <p>Sorry, no results were found!</p>
      }
    </div>
  );

  //   return (
  //   <div className="GetListingCardList">
  //     {/* <SearchForm
  //       handleSave={updateSearchTerm}
  //       initialFormData={{ name: "" }}
  //     /> */}

  //     <ListingCardList />
  //   </div>
  // );
}

export default GetListingCardList;