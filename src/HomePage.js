import "./HomePage.css";
import userContext from "./userContext";
import { useContext } from "react";
/** To render homepage.
 *
 *  Context:
 *      - user
 *          TODO: update what a user has
 *          (i.e. { username, firstName, lastName, email, isAdmin })
 *
 *  No props.
 *
 *  No state.
 *
 *  RouteList -> HomePage
 */

function HomePage() {
  console.log("We're in the HomePage component");

  const user = useContext(userContext);

  return (
    <div className="HomePage">
      <h1>ShareBnB</h1>
      {user && <h2>Welcome back, {user.firstName}!</h2>}
    </div>
  );
}

export default HomePage;