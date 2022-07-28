import { NavLink } from "react-router-dom";
import "./Navigation.css";
import userContext from "./userContext";
import { useContext } from "react";

/** To render the navigation bar.
 *
 *  Context: user
 *         (i.e. { username, firstName, lastName, email, isAdmin })
 *
 *  No props.
 *
 *  No state.
 *
 *  App -> Navigation
 */

function Navigation() {
  console.log("We're in the Navigation component");

  const user = useContext(userContext);


  return (
    <nav className="Navigation">
      <NavLink className="home" to="/">
        ShareBnB
      </NavLink>
      {user
        ?
        (<div>
          <NavLink className="Navigation-listings" to="/listings">
            Listing
          </NavLink>
          <NavLink className="Navigation-add" to="/listings/add">
            Add Listing
          </NavLink>
          <NavLink className="Navigation-logout" to="/logout">
            Logout, {user.username}
          </NavLink>
        </div>)
        : (<div>
          <NavLink className="Navigation-listings" to="/listings">
            Listing
          </NavLink>
          <NavLink className="Navigation-login" to="/login">
            Login
          </NavLink>
          <NavLink className="Navigation-signup" to="/signup">
            Signup
          </NavLink>
        </div>)
      }
    </nav>
  );
}

export default Navigation;
