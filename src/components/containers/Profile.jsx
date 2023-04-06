import { auth } from "./SignUp";
import { signOut } from "firebase/auth";

const Profile = () => {
  return (
    <section>
      <h1>Bienvenido </h1>
      <button onClick={() => { signOut(auth); }}>
        Cerrar Sesión
      </button>
    </section>
  );
};

export default Profile;