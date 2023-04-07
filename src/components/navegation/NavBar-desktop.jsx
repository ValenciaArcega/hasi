import { IconHome, IconSearch, IconPerson } from "../icons/NBDesktopIcons";
import { Link } from "react-router-dom";

const NavBarDesktop = () => {
  return (
    <nav className="navBar-desktop">
      <h1 className="navBar-desktop-titleLogo"><span className="highlight-container"><span className="highlight">Hasi</span></span></h1>
      <div className="wrapper-navBar-desktop__buttons">

        <Link to='/hasi/' className="navBar__desktop-btn navBar__desktop-search" >
          <IconHome />
          Inicio
        </Link>

        <Link to='/hasi/search' className="navBar__desktop-btn navBar__desktop-search" >
          <IconSearch />
          Buscar
        </Link>

        <Link to='/hasi/profile' className="navBar__desktop-btn navBar__desktop-signOut">
          <IconPerson />
          Cuenta
        </Link>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
