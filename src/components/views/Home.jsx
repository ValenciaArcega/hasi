import NavBarDesktop from "../navegation/NavBarDesktop";
import NavBarMobile from "../navegation/NavBarMobile";
import Appearance from "../buttons/Appearance";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Search from "./Search";
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    let viewPort = window.matchMedia("(max-width: 450px)");

    const view_DESKTOP = document.querySelector('.navBar-desktop');
    const view_MOBILE = document.querySelector('.navBar-mobile');

    const mediaScreen = (y) => {
      if (y.matches) {
        view_DESKTOP.classList.add('hidden');
        view_MOBILE.classList.remove('hidden');
      } else {
        view_DESKTOP.classList.remove('hidden');
        view_MOBILE.classList.add('hidden');
      }
    };
    mediaScreen(viewPort);
    viewPort.addListener(mediaScreen);
  }, []);

  return (
    <main className="screen-home">
      <NavBarDesktop />
      <NavBarMobile />
      <Routes>
        <Route path='/hasi//*' element={<Dashboard />}></Route>
        <Route path='/hasi/search' element={<Search />}></Route>
        <Route path='/hasi/profile' element={<Profile />}></Route>
      </Routes>
      <Appearance />
    </main>
  );
};

export default Home;
