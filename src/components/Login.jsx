import { useState } from "react";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import MsgDoneRegister from "./messages/msg-done";

const Login = () => {

  const [isRegistering, setIsRegistering] = useState(false);

  if (!isRegistering) {
    return (
      <SignIn isRegistering={isRegistering} setIsRegistering={setIsRegistering} />
    );
  } else {
    return (
      <SignUp isRegistering={isRegistering} setIsRegistering={setIsRegistering} />
    );
  }
};

export default Login;
