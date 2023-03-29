import { IconSearch, IconMoon, IconSun, IconSignOut } from "../icons/svg-navBarDesktop";
import { makeDarkOnDesk, makeLightOnDesk } from "../functions/appearance/appearance-desktop";

import { auth } from "../containers/SignUp";
import { signOut } from 'firebase/auth';

const NavBarDesktop = () => {
  return (
    <nav className="navBar-desktop">
      <h1 className="navBar-desktop-titleLogo">hasi</h1>
      <div className="wrapper-navBar-desktop__buttons">

        <button className="navBar__desktop-btn navBar__desktop-search" type="button">
          <IconSearch />
          Buscar
        </button>
        <button onClick={makeDarkOnDesk} className="navBar__desktop-btn navBar__desktop-dark" type="button">
          <IconMoon />
          Obscuro
        </button>
        <button onClick={makeLightOnDesk} className="navBar__desktop-btn navBar__desktop-light hidden" type="button">
          <IconSun />
          Claro
        </button>
        <button className="navBar__desktop-btn navBar__desktop-signOut" type="button" onClick={() => signOut(auth)}>
          <IconSignOut />
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
