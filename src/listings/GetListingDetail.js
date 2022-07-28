import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListingDetail from "./ListingDetail";
import ShareBNB from "../api";

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
  // console.log("GetCompanyDetail");

  // const { handle } = useParams();
  // const [company, setCompany] = useState(null);

  // useEffect(function fetchCompanyFromAPI() {
  //   async function getCompany() {
  //     const companyData = await JoblyAPI.getCompany(handle);
  //     setCompany(c => companyData);
  //   }
  //   getCompany();

  // }, []);

  return (
    <div className="GetListingDetail">
      {/* {company
        ? <ListingDetail company={company} />
        : <p>Loading... </p>
      } */}
      <ListingDetail />
    </div>
  );
}

export default GetListingDetail;