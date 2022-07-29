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
 *  - user { username, id, first_name, last_name }
 *  - token as string for login auth
 *
 *  Props:
 *  - None
 *
 *  App -> { Navigation, RouteList }
 *
 **/

function App() {

  const [token, setToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY));
  const [user, setUser] = useState(null);


  /** Gets user from API when token changes */
  useEffect(function fetchUserInfoFromAPI() {

    if (token) {
      // const { id } = jwt_decode(token);
      putTokenInLS(token);
      getUser(token);
    }
  }, [token]);


  /** Add token in localStorage, or retreive if it already exists in LS */
  function putTokenInLS(token) {
    const joblyToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

    if (!joblyToken && token) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    }
  }


  /** Get current user details */
  async function getUser(token) {
    ShareBNBApi.token = token;
    const userData = await ShareBNBApi.getUserFromAPI();
    setUser(u => userData);
  }


  /** Login user and update token */
  //TODO:

  /** Signup new user and update token */
  //TODO:

  /** Log out user and resets token and user to initial values */
  function logout() {
    setToken(t => "");
    setUser(u => null);
    localStorage.removeItem('share-bnb-token');
  }

  /** Add new listing and navigate to /listings */
  //TODO:


  if (token && !user) return <h1>Loading...</h1>

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation logout={logout}/>
          {/* <RouteList functions={{ login, signup, addListing }}/> */}
          <RouteList />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
