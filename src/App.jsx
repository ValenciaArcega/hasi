import './App.css';
import Login from './components/Login';
import Home from './components/views/Home';
import firebaseApp from "./credentials";
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function App() {
  // variables
  const auth = getAuth(firebaseApp);
  const [globalUser, setGlobalUser] = useState(false);
  // functions
  // u : firebase user
  onAuthStateChanged(auth, (u) => u ? setGlobalUser(u) : setGlobalUser(null));

  return <>{globalUser ? <Home userMail={globalUser.email} /> : <Login />}</>;
}
