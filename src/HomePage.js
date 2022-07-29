import "./HomePage.css";
import userContext from "./userContext";
import { useContext } from "react";


/**
 *  Homepage
 *
 *  Props:
 *    - None
 *
 *  State:
 *    - None
 *
 *  Context:
 *    - user: { username, id, first_name, last_name }
 *
 *  RouteList -> Homepage
 */

function HomePage() {
  // console.log("We're in the HomePage component");

  const user = useContext(userContext);

  return (
    <div className="HomePage">
      <h1>ShareBnB</h1>
      {user && <h2>Welcome back, {user.first_name}!</h2>}
    </div>
  );
}

export default HomePage;