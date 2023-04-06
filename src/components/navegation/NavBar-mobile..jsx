import { IconHome, IconSearch, IconPerson } from "../icons/NBMobileIcons";
import { Link } from "react-router-dom";

const NavBarMobile = () => {
  return (
    <nav className="navBar-mobile hidden">
      <Link to='/hasi/' className="nbMobile-button">
        <IconHome />
        Inicio
      </Link>
      <Link to='/hasi/search' className="nbMobile-button nbMobile-buttonSearch">
        <IconSearch />
      </Link>
      <Link to='/hasi/profile' className="nbMobile-button">
        <IconPerson />
        Cuenta
      </Link>
    </nav>
  );
};

export default NavBarMobile;