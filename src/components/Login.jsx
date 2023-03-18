import { useState } from "react";
// icons
import { IconMail, IconPassword } from "./icons/svg-login";
import { IconBack, IconText, IconShow, IconHide, IconHideConfirm, IconShowConfirm } from "./icons/svg-registerUser";
// functions
import { blurFieldID, focusFieldID, focusFieldPass, blurFieldPass } from "./functions/inputLogin";

import { inputNameKeyUp, inputNameFocusIn, inputNameBlur, inputNumberFocusIn, inputNumberBlur, inputNumberKeyUp, inputPassFocusIn, inputPassBlur, showPassRegister, inputConfirmPassFocusIn, inputConfirmPassBlur, inputConfirmPassKeyUp, showConfirmRegister } from "./functions/inputRegister";


const Login = () => {

  const [isRegistering, setIsRegistering] = useState(false);

  if (isRegistering) {
    return (
      <main className="container-login">
        <div className="login">
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
          }} >¿No tienes una cuenta? Regístrate'</button>
        </div>
      </main>
    );
  } else {
    return (
      <section className="container-registerUser">
        <div className="registerUser">

          <button onClick={() => { setIsRegistering(!isRegistering); }} className="btn-backLogin" type="button">
            <IconBack />
            Regresar
          </button>

          <h1 className="registerUser-h1">Crea una cuenta gratis</h1>

          <form className="registerUser-form">

            <div className="wrapper-header-input">
              <h4 className="header-input-h4">Nombre</h4>
              <IconText />
            </div>
            <input onBlur={inputNameBlur} onKeyUp={inputNameKeyUp} onFocus={inputNameFocusIn} autoComplete="off" placeholder="Ingresa tu nombre completo" className="registerUser-form-name" />
            <p className="registerUser-form-name-p"> </p>

            <div className="wrapper-header-input">
              <h4 className="header-input-h4">Número de teléfono</h4>
              <p className="header-input-number-p">123</p>
            </div>
            <input onBlur={inputNumberBlur} onKeyUp={inputNumberKeyUp} onFocus={inputNumberFocusIn} autoComplete="off" placeholder="Ingresa tu número celular" className="registerUser-form-id" />
            <p className="registerUser-form-id-p"></p>

            <div className="wrapper-header-input">
              <h4 className="header-input-h4">Contraseña</h4>
            </div>
            <div className="wrapper-password">
              <input onBlur={inputPassBlur} onFocus={inputPassFocusIn} autoComplete="new-password" type="password" className="registerUser-form-pass" placeholder="Crea una contraseña" />
              <button onClick={showPassRegister} className="btn-showPass" type="button">
                <IconShow />
                <IconHide />
              </button>
            </div>
            <div className="wrapper-textAdvicePass">
              <p className="registerUser-form-pass-p">Una contraseña segura</p>
              <ul className="registerUser-form-pass-ul">
                <li>Tiene al menos 8 caracteres</li>
                <li>Combinación de letras, números, etc.</li>
              </ul>
            </div>

            <div className="wrapper-header-input">
              <h4 className="header-input-h4">Confirmar contraseña</h4>
            </div>
            <div className="wrapper-password">
              <input onKeyUp={inputConfirmPassKeyUp} onFocus={inputConfirmPassFocusIn} onBlur={inputConfirmPassBlur} autoComplete="new-password" type="password" className="registerUser-form-passConfirm" placeholder="Repite la contraseña" />
              <button onClick={showConfirmRegister} className="btn-showPassConfirm" type="button">
                <IconShowConfirm />
                <IconHideConfirm />
              </button>
            </div>
            <p className="registerUser-form-passConfirm-p"></p>

            <button className="btn-registerUser" type="button" name="button to Register">Registrarme Ahora</button>
          </form>
        </div>
      </section>
    );
  } // else

}; // component

export default Login;;;;;