
import { IconWrongLogin } from '../icons/svg-login';

const WrongLogin = () => {
  return (
    <div className="message__wrong-login">
      <IconWrongLogin />
      <p className="message__wrong-login-p">Las credenciales no coinciden</p>
    </div>
  );
};

export default WrongLogin;