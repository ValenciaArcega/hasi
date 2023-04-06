
import { IconWrongLogin } from '../icons/LoginIcons';

const WrongLogin = () => {
  return (
    <div className="message__wrong-login">
      <IconWrongLogin />
      <p className="message__wrong-login-p">Las credenciales no coinciden</p>
    </div>
  );
};

export default WrongLogin;