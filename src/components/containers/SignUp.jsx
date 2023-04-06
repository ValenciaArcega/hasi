import { IconBack, IconText, IconShow, IconHide, IconHideConfirm, IconShowConfirm } from "../icons/RegisterUserIcons";
import { inputNameKeyUp, inputNameFocusIn, inputNameBlur, inputNumberFocusIn, inputNumberBlur, inputPassFocusIn, inputPassBlur, showPassRegister, inputConfirmPassFocusIn, inputConfirmPassBlur, inputConfirmPassKeyUp, showConfirmRegister } from "../functions/inputRegister";
import reviewRegister from "../functions/buttonRegister";
import firebaseApp from '../../credentials';
import { getAuth, createUserWithEmailAndPassword, } from 'firebase/auth';

export const auth = getAuth(firebaseApp);

const SignUp = ({ isRegistering, setIsRegistering }) => {

  async function submitHandler(e) {
    e.preventDefault();
    const mail = e.target.inputMail.value;
    const password = e.target.inputPassword.value;

    await createUserWithEmailAndPassword(auth, mail, password);
  }

  return (
    <section className="container-registerUser">

      <div className="registerUser">
        <button onClick={() => { setIsRegistering(!isRegistering); }} className="btn-backLogin" type="button">
          <IconBack />
          Regresar
        </button>

        <h1 className="registerUser-h1">Crea una cuenta gratis</h1>

        <form className="registerUser-form" onSubmit={submitHandler}>

          <div className="wrapper-header-input">
            <h4 className="header-input-h4">Nombre</h4>
            <IconText />
          </div>
          <input onBlur={inputNameBlur} onKeyUp={inputNameKeyUp} onFocus={inputNameFocusIn} autoComplete="off" placeholder="Ingresa tu nombre completo" className="registerUser-form-name" />
          <p className="registerUser-form-name-p"> </p>

          <div className="wrapper-header-input">
            <h4 className="header-input-h4">Correo electrónico</h4>
          </div>
          <input onBlur={inputNumberBlur} onFocus={inputNumberFocusIn} autoComplete="off" placeholder="usuario@dominio.com" className="registerUser-form-id" id="inputMail" />
          <p className="registerUser-form-id-p"></p>

          <div className="wrapper-header-input">
            <h4 className="header-input-h4">Contraseña</h4>
          </div>
          <div className="wrapper-password">
            <input onBlur={inputPassBlur} onFocus={inputPassFocusIn} autoComplete="new-password" type="password" className="registerUser-form-pass" placeholder="Crea una contraseña" id="inputPassword" />
            <button onClick={showPassRegister} className="btn-showPass" type="button" title="button show">
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
            <button onClick={showConfirmRegister} className="btn-showPassConfirm" type="button" title="button show">
              <IconShowConfirm />
              <IconHideConfirm />
            </button>
          </div>
          <p className="registerUser-form-passConfirm-p"></p>

          <button type="submit" onClick={reviewRegister} className="btn-registerUser" name="button to Register">Registrarme Ahora</button>
        </form>

      </div>
    </section>
  );
};

export default SignUp;
