
import { useState } from 'react';
import { IconMail, IconPassword } from "../icons/LoginIcons";
import { blurFieldID, focusFieldID, focusFieldPass, blurFieldPass } from "../functions/inputLogin";
import WrongLogin from "../messages/WrongLoginMessage";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../credentials";

const auth = getAuth(firebaseApp);

const SignIn = ({ isRegistering, setIsRegistering }) => {

  let [isWrong, setIsWrong] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const m = e.target.inputMail.value;
    const p = e.target.inputPassword.value;
    await signInWithEmailAndPassword(auth, m, p);

    if (m === auth.mail && p) {
    } else {
      setIsWrong(isWrong = true);
      setTimeout(() => {
        setIsWrong(isWrong = null);
      }, 3000);
    }
  }

  return (
    <main className="container-login">
      <> {isWrong ? <WrongLogin /> : null} </>

      <div className="login">
        <img className="logo-img" src="login.svg" alt="ilustration person opening a door" />
        <h1 className="login-title-h1">Inicia Sesión</h1>

        <form className="wrapper-field" onSubmit={submitHandler}>

          <p>Correo electrónico</p>
          <div className="field-id">
            <IconMail />
            <input onBlur={blurFieldID} onFocus={focusFieldID} autoComplete="off" className="input-login-id" type="email" name="field ID" id="inputMail" placeholder="Ingresa tu correo" />
          </div>

          <p>Contraseña</p>
          <div className="field-password">
            <IconPassword />
            <input onBlur={blurFieldPass} onFocus={focusFieldPass} autoComplete="off" className="input-login-pass" type="password" name="field password" id="inputPassword"
              placeholder="Ingresa tu contraseña" />
          </div>

          <button className="btn-logIn" type="submit">Ingresar</button>
        </form>

        <button className="btn__toggle__accOrReg" onClick={() => {
          setIsRegistering(!isRegistering);
        }}>¿No tienes una cuenta? Regístrate
        </button>
      </div>
    </main >
  );
};

export default SignIn;
