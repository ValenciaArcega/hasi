import { makeLight } from "../../functions/switch-appearance";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "./SignUp";

const Profile = () => {
  return (
    <section className="section-profile">
      <h1 className="profile-h1">Bienvenido </h1>
      <Link onClick={() => {
        makeLight();
        signOut(auth);
      }} to='/hasi/' className="profile-buttonSignOut-link">
        Cerrar Sesión
      </Link>
    </section>
  );
};

export default Profile;
