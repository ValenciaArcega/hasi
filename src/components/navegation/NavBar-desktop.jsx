import { IconSearch, IconMoon, IconSun, IconSignOut } from "../icons/NBDesktopIcons";
import { makeDarkOnDesk, makeLightOnDesk } from "../functions/appearance/appearance-desktop";
import { auth } from "../containers/SignUp";
import { signOut } from 'firebase/auth';
import { Link } from "react-router-dom";

const NavBarDesktop = () => {
  return (
    <nav className="navBar-desktop">
      <h1 className="navBar-desktop-titleLogo">Hasi</h1>
      <div className="wrapper-navBar-desktop__buttons">

        <Link to='/hasi/search' className="navBar__desktop-btn navBar__desktop-search" >
          <IconSearch />
          Buscar
        </Link>
        <button onClick={makeDarkOnDesk} className="navBar__desktop-btn navBar__desktop-dark" type="button">
          <IconMoon />
          Obscuro
        </button>
        <button onClick={makeLightOnDesk} className="navBar__desktop-btn navBar__desktop-light hidden" type="button">
          <IconSun />
          Claro
        </button>
        <button className="navBar__desktop-btn navBar__desktop-signOut" onClick={() => signOut(auth)}>
          <IconSignOut />
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
