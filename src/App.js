import './App.css';
import Navigation from './Navigation';
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from "react";
import userContext from './userContext';
import ShareBNBApi from './api';
// import jwtDecode from 'jwt-decode';

function App() {
  //TODO: get user to pass along
  const user = {firstName:'Joel'};

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation />
          <RouteList />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
