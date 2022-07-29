import React, { useState, useEffect } from "react";
// import SearchForm from "./SearchForm";
import ListingCardList from "./ListingCardList";
import ShareBNBApi from "../api";

/** TODO:
 *  GetCompanyCardList
 *
 *  Props:
 *    - None
 *
 *  State:
 *    - companies: array of companies from API [ {company}, ... ]
 *
 *  RoutesList -> GetCompanyCardList -> CompanyCardList
 */

function GetListingCardList() {
  const [listings, setListings] = useState(null);
  // const [searchTerm, setSearchTerm] = useState(null);
  // console.log('listings =', listings);

  /** Get all listings on mount and searchTerm update */
  useEffect(function fetchListingsFromAPI() {
    /** Get all companies from API with optional search term */
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