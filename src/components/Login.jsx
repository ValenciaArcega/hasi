import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import { useState } from "react";

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
