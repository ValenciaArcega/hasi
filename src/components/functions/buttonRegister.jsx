import users from "../../data/users";

const reviewRegister = () => {

  let reviewed = false;

  const inputName = document.querySelector('.registerUser-form-name');
  const inputID = document.querySelector('.registerUser-form-id');
  const inputPass = document.querySelector('.registerUser-form-pass');
  const inputPassConfirm = document.querySelector('.registerUser-form-passConfirm');

  const textErrorName = document.querySelector('.registerUser-form-name-p');
  const textErrorID = document.querySelector('.registerUser-form-id-p');
  const textErrorPassConfirm = document.querySelector('.registerUser-form-passConfirm-p');

  let root = document.querySelector(':root');
  let resultName = false;
  let resultID = false;
  let resultPass = false;
  /////////////////////////////////////////////////////////
  if (inputName.value === '') {
    root.style.setProperty('--borderFieldName', '#f63737');
    textErrorName.textContent = 'El campo es obligatorio';
  } else if (inputName.value.match(/[0-9]/)) {
    root.style.setProperty('--borderFieldName', '#f63737');
    textErrorName.textContent = 'Solo caracteres tipo texto';
  } else {
    resultName = true;
  }
  /////////////////////////////////////////////////////////
  if (inputID.value === '') {
    root.style.setProperty('--borderFieldID', '#f63737');
    textErrorID.textContent = 'El campo es obligatorio';
  } else if (inputID.value.match(/[A-Za-z]/)) {
    root.style.setProperty('--borderFieldID', '#f63737');
    textErrorID.textContent = 'Solo caracteres tipo númerico';
  } else {
    resultID = true;
  }
  /////////////////////////////////////////////////////////
  if (inputPassConfirm.value === inputPass.value) {
    resultPass = true;
  } else {
    root.style.setProperty('--borderFieldPassConfirm', '#f63737');
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden';
  }
  /////////////////////////////////////////////////////////
  let [dataNAME, dataID, dataPASS] = [inputName.value, inputID.value, inputPass.value];

  if (resultName && resultID && resultPass) {

    users.push({ name: dataNAME, number: Number(dataID), pin: Number(dataPASS), premium: false });
    console.log(users);
    resultID = false;
    resultPass = false;
    resultName = false;

    return reviewed = true;
  }

  return reviewed;
};

export default reviewRegister;
/*
const input = 55;
const pin = 111;
const printUsers = () => {
  users.forEach((item) => {
    if (item.number === input && item.pin === pin) {
      console.log('logeado');
    } else {
      console.log('nope');
    }
  });
};

export default printUsers;*/