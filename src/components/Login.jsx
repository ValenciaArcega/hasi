import { useState } from "react";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

const Login = () => {

  const [isRegistering, setIsRegistering] = useState(false);

  if (isRegistering) {
    return (
      <SignUp isRegistering={isRegistering} setIsRegistering={setIsRegistering} />
    );
  } else {
    return (
      <SignIn isRegistering={isRegistering} setIsRegistering={setIsRegistering} />
    );
  }
};

export default Login;
