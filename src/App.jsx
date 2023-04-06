import './App.css';
import Login from './components/Login';
import Home from './components/containers/Home';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from "./credentials";

const auth = getAuth(firebaseApp);

export function App() {

  const [globalUser, setGlobalUser] = useState(false);

  onAuthStateChanged(auth, (fireUser) => {
    fireUser
      ? setGlobalUser(fireUser)
      : setGlobalUser(null);
  });

  return (
    <>
      {globalUser
        ? <Home userMail={globalUser.email} />
        : <Login />}
    </>
  );
}
