import './App.css';
import Navigation from './Navigation';
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from "react";
import userContext from './userContext';
import ShareBNBApi from './api';
// import jwt_decode from 'jwt-decode';

const LOCAL_STORAGE_TOKEN_KEY = 'share-bnb-token';

/** Site application.
 *
 *  State:
 *  - user {username, firstName, lastName, email, isAdmin}
 *  - token as string for login auth
 *
 *  Props:
 *  - None
 *
 *  App -> { Navigation, RoutesList }
 *
 **/

function App() {

  const [token, setToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY));
  const [user, setUser] = useState(null);

  /** Gets user from API when token changes */
  useEffect(function fetchUserInfoFromAPI() {

    if (token) {
      // putTokenInLS(token);
      // const { id } = jwt_decode(token);
      //TODO: try catch - for bad token and catch error
      getUser(token);
    }
  }, [token]);

  /** Get current user details */
  async function getUser(token) {
    ShareBNBApi.token = token;
    const userData = await ShareBNBApi.getUserFromAPI();
    setUser(u => userData);
  }


  /** Log out user and resets token and user to initial values */
  function logout() {
    setToken(t => "");
    setUser(u => null);
    localStorage.removeItem('share-bnb-token');
  }


  if (token && !user) return <h1>Loading...</h1>

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation logout={logout}/>
          <RouteList />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
