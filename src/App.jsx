import './App.css';
import '../main.css';
import Login from './components/pages/Sign';
import Home from './components/pages/Home';
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
