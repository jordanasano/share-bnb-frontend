import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './HomePage';
import GetListingCardList from './GetListingCardList';
import GetListingDetail from './GetListingDetail';
import AddListingForm from './AddListingForm';
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import { useContext } from "react";
import userContext from "./userContext";

/** To route user activity to applicable components.
 *
 *  Context: user
 *         (i.e. { username, firstName, lastName, email, isAdmin })
 *
 *  Props:
 *      - logout(), signUp(), login(), updateUser()
 *
 *  No state.
 *
 *  App -> RouteList
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
            path="/logout"
            element={<Logout logout={logout} />} />
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
