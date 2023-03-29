import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Home from './components/containers/Home';
import firebaseApp from "./credentials";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
