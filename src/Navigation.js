import { NavLink } from "react-router-dom";
import "./Navigation.css";
import userContext from "./userContext";
import { useContext } from "react";

 /**  Navigation
 *
 *  Props:
 *    - logout: fn passed from App
 *
 *  State:
 *    - None
 *
 *  Context:
 *    - user { username, id, first_name, last_name }
 *
 *  App -> Navigation
 */

function Navigation({logout}) {
  console.log("We're in the Navigation component");

  const user = useContext(userContext);

  return (
    <nav className="Navigation">
      <span>
        <NavLink className="home" to="/">
          ShareBnB
        </NavLink>
      </span>
      {user
        ?
        (<span>
          <NavLink className="Navigation-listings" to="/listings">
            Listing
          </NavLink>
          <NavLink className="Navigation-add" to="/listings/add">
            Add Listing
          </NavLink>
          <NavLink to="/">
            <span onClick={logout}>Log out {user.username}</span>
          </NavLink>
        </span>)
        : (<span>
          <NavLink className="Navigation-listings" to="/listings">
            Listing
          </NavLink>
          <NavLink className="Navigation-login" to="/login">
            Login
          </NavLink>
          <NavLink className="Navigation-signup" to="/signup">
            Signup
          </NavLink>
        </span>)
      }
    </nav>
  );
}

export default Navigation;
