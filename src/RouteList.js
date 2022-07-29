import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './HomePage';
import GetListingCardList from './listings/GetListingCardList';
import GetListingDetail from './listings/GetListingDetail';
import AddListingForm from './listings/AddListingForm';
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { useContext } from "react";
import userContext from "./userContext";

/** TODO:
 *  RoutesList
 *
 *  Props:
 *    - functions: { login, signup } from App
 *
 *  State:
 *    - None
 *
 *  Context:
 *    - user { username, firstName, lastName, email, isAdmin }
 *
 *  App -> RoutesList -> Routes
 */

function RouteList({ logout, signUp, logIn, updateUser }) {
  console.log("We're in the RouteList component");

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
            element={<Login logIn={logIn} />} />
          <Route
            path="/signup"
            element={<Signup signUp={signUp} />} />
          <Route
            path='*'
            element={<Navigate to='/' />} />
        </Routes>)
      }
    </div>
  );
}

export default RouteList;
