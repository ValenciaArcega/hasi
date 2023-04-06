import NavBarDesktop from "../navegation/NavBar-desktop";
import NavBarMobile from "../navegation/NavBar-mobile.";
import Dashboard from "./Dashboard";
import { Search } from "./Search";
import Profile from "./Profile";

import { Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="screen-home">
      <NavBarDesktop />
      <NavBarMobile />

      <Routes>
        <Route path='/hasi//*' element={<Dashboard />}></Route>
        <Route path='/hasi/search' element={<Search />}></Route>
        <Route path='/hasi/profile' element={<Profile />}></Route>
      </Routes>

    </main>
  );
};

export default Home;
