import { IconMail, IconPassword } from "../icons/svg-login";
import { blurFieldID, focusFieldID, focusFieldPass, blurFieldPass } from "../functions/inputLogin";

const SignIn = ({ isRegistering, setIsRegistering }) => {
  return (
    <main className="container-login">
      <div className="login">

        <img className="logo-img" src="login.svg" alt="ilustration person opening a door" />

        <h1 className="login-title-h1">Inicia Sesión</h1>

        <form className="wrapper-field">
          <p>Identificador</p>
          <div className="field-id">
            <IconMail />
            <input onBlur={blurFieldID} onFocus={focusFieldID} autoComplete="off" className="input-login-id" type="email" name="field ID"
              placeholder="Ingresa tu número telefónico" />
          </div>
          <p>Contraseña</p>
          <div className="field-password">
            <IconPassword />
            <input onBlur={blurFieldPass} onFocus={focusFieldPass} autoComplete="off" className="input-login-pass" type="password" name="field password"
              placeholder="Ingresa tu contraseña" />
          </div>
        </form>

        <button className="btn-logIn" type="button">Ingresar</button>

        <button className="btn__toggle__accOrReg" onClick={() => {
          setIsRegistering(!isRegistering);
        }}>¿No tienes una cuenta? Regístrate
        </button>
      </div>

    </main>
  );
};

export default SignIn;