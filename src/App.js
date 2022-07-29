import './App.css';
import Navigation from './Navigation';
import RouteList from './RouteList';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect, useState, useNavigate } from "react";
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
  // console.log(token)
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

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
    const userData = await ShareBNBApi.getUserDetails();
    setUser(u => userData);
  }


  /** Login user and update token */
  async function login({ username, password }) {
    const token = await ShareBNBApi.loginUser({ username, password });
    setToken(token);
  }

  /** Signup new user and update token */
  async function signup({ username, password, first_name, last_name }) {
    const token = await ShareBNBApi.signupUser({
      username,
      password,
      first_name,
      last_name
    });
    setToken(token);
  }

  /** Log out user and resets token and user to initial values */
  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  }

  /** Add new listing and navigate to /listings */
  async function addListing({ title, description, price_per_day, location, files }) {
    await ShareBNBApi.addListing({ title, description, price_per_day, location, files });
    // navigate('/listings');
    // return <Navigate to="/listings" />
  }


  if (token && !user) return <h1>Loading...</h1>

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation logout={logout} />
          <RouteList login={login} signup={signup} addListing={addListing} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
