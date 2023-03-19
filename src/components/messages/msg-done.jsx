import IconCheckDone from "../icons/svg-msgs";

const MsgDoneRegister = () => {
  return (
    <div className="message__done-register hidden">
      <IconCheckDone />
      <p className="message__done-register-p">Usuario registrado con exito</p>
    </div>
  );
};

export default MsgDoneRegister;
