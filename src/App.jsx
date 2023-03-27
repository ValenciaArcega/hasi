import { useState } from 'react';
import Login from './components/Login';
import Home from './components/containers/Home';

import './App.css';

export function App() {

  const [isLogged, setIsLogged] = useState(null);
  const updateLog = (newValue) => setIsLogged(newValue);

  return (
    <>
      {isLogged ? <Home /> : <Login updateLog={updateLog} />}
    </>
  );
}

/*
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
//  google can say our app that user is login with
import firebaseApp from "./credentials";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);

function App() {
  // create a global state
  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, function (firebaseUser) {
    if (firebaseUser) {
      setGlobalUser(firebaseUser);
    } else {
      setGlobalUser(null);
    }
  });
  return (
    <>
      {globalUser
        ? <Home userMail={globalUser.email} />
        : <Login />
      }
    </>
  );
}

export default App;
*/