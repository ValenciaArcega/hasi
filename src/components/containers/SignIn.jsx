
import { useState } from 'react';
import { IconMail, IconPassword } from "../icons/svg-login";
import { blurFieldID, focusFieldID, focusFieldPass, blurFieldPass } from "../functions/inputLogin";
import WrongLogin from "../messages/msg-wrongLogin";
import users from "../../data/users";

const SignIn = ({ updateLog, isRegistering, setIsRegistering }) => {

  let [isWrong, setIsWrong] = useState(false);

  const checkCredentials = () => {
    const a = document.querySelector('.input-login-id');
    const b = document.querySelector('.input-login-pass');

    users.forEach((user) => {
      if (Number(a.value) === user.number && b.value === user.pin) {
        updateLog(true);
      } else {
        setIsWrong(isWrong = true);
        setTimeout(() => {
          setIsWrong(isWrong = false);
        }, 3000);
      }
    });
  };

  return (
    <main className="container-login">
      <>
        {isWrong ? <WrongLogin /> : null}
      </>
      <div className="login">

        <img className="logo-img" src="login.svg" alt="ilustration person opening a door" />

        <h1 className="login-title-h1">Inicia Sesión</h1>

        <form className="wrapper-field">
          <p>Número telefónico</p>
          <div className="field-id">
            <IconMail />
            <input onBlur={blurFieldID} onFocus={focusFieldID} autoComplete="off" className="input-login-id" type="email" name="field ID"
              placeholder="Ingresa tu identificador" />
          </div>
          <p>Contraseña</p>
          <div className="field-password">
            <IconPassword />
            <input onBlur={blurFieldPass} onFocus={focusFieldPass} autoComplete="off" className="input-login-pass" type="password" name="field password"
              placeholder="Ingresa tu contraseña" />
          </div>
        </form>

        <button onClick={checkCredentials} className="btn-logIn" type="button">Ingresar</button>

        <button className="btn__toggle__accOrReg" onClick={() => {
          setIsRegistering(!isRegistering);
        }}>¿No tienes una cuenta? Regístrate
        </button>
      </div>
    </main >
  );
};

export default SignIn;