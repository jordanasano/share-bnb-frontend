import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './HomePage';
import GetListingCardList from './listings/GetListingCardList';
import GetListingDetail from './listings/GetListingDetail';
import AddListingForm from './listings/AddListingForm';
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";
import { useContext } from "react";
import userContext from "./userContext";

/**
 *  RoutesList
 *
 *  Props:
 *    - functions: { login, signup, addListing } from App
 *
 *  State:
 *    - None
 *
 *  Context:
 *    - user { username, firstName, lastName, email, isAdmin }
 *
 *  App -> RouteList -> Routes
 */

function RouteList({ functions }) {
  // console.log("We're in the RouteList component");

  // const { login, signup, addListing } = functions;

  const user = useContext(userContext);

  return (
    <div>
      {user
        ?
        (<Routes>
          <Route
            path="/"
            element={<HomePage />} />
          <Route
            path="/listings"
            element={<GetListingCardList />} />
          <Route
            path="/listings/:id"
            element={<GetListingDetail />} />
          <Route
            path="/listings/add"
            // element={<AddListingForm addListing={addListing}/>} />
            element={<AddListingForm />} />
          <Route
            path='*'
            element={<HomePage />} />
        </Routes>)
        :
        (<Routes>
          <Route
            path="/"
            element={<HomePage />} />
          <Route
            path="/listings"
            element={<GetListingCardList />} />
          <Route
            path="/listings/:id"
            element={<GetListingDetail />} />
          <Route
            path="/login"
            // element={<LoginForm login={login} />} />
            element={<LoginForm />} />
          <Route
            path="/signup"
            // element={<SignupForm signup={signup} />} />
            element={<SignupForm />} />
          <Route
            path='*'
            element={<Navigate to='/' />} />
        </Routes>)
      }
    </div>
  );
}

export default RouteList;
