import { IconWrongLogin } from '../icons/LoginIcons';

const WrongLogin = () => {
  return (
    <div className="message__wrong-login">
      <IconWrongLogin />
      <p className="message__wrong-login-p">Error en las credenciales</p>
    </div>
  );
};

export default WrongLogin;
