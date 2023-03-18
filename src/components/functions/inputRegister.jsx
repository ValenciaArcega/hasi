
let root = document.querySelector(':root');
////////////////////////////////////////////////////////////
// input name
const inputNameFocusIn = () => root.style.setProperty('--borderFieldName', '#2e466f');
const inputNameBlur = () => root.style.setProperty('--borderFieldName', '#a1a1a1');
const inputNameKeyUp = () => {
  let root = document.querySelector(':root');
  const inputName = document.querySelector('.registerUser-form-name');
  const textErrorName = document.querySelector('.registerUser-form-name-p');

  for (let i = 0; i < inputName.value.length; i++) {
    root.style.setProperty('--borderFieldName', '#2e466f');
    if (inputName.value[i].match(/^[0-9]+$/)) {
      textErrorName.textContent = 'Recuerda, caracteres de tipo texto';
      root.style.setProperty('--borderFieldName', '#f63737');
    } else {
      textErrorName.textContent = '';
    }
  }
  if (inputName.value === '') {
    textErrorName.textContent = '';
    root.style.setProperty('--borderFieldName', '#2e466f');
  }
};

////////////////////////////////////////////////////////////
// input number
const inputNumberFocusIn = () => root.style.setProperty('--borderFieldID', '#2e466f');
const inputNumberBlur = () => root.style.setProperty('--borderFieldID', '#a1a1a1');
const inputNumberKeyUp = () => {

  const inputID = document.querySelector('.registerUser-form-id');
  const textErrorID = document.querySelector('.registerUser-form-id-p');

  for (let i = 0; i < inputID.value.length; i++) {
    root.style.setProperty('--borderFieldID', '#2e466f');
    if (inputID.value[i].match(/[A-Za-z]/)) {
      textErrorID.textContent = 'Recuerda, caracteres de tipo numérico';
      root.style.setProperty('--borderFieldID', '#f63737');
    } else {
      textErrorID.textContent = '';
    }
  }
  if (inputID.value === '') {
    textErrorID.textContent = '';
    root.style.setProperty('--borderFieldID', '#2e466f');
  }
};

////////////////////////////////////////////////////////////
// input password
const inputPassFocusIn = () => root.style.setProperty('--borderFieldPass', '#2e466f');
const inputPassBlur = () => root.style.setProperty('--borderFieldPass', '#a1a1a1');
const showPassRegister = () => {
  const inputPass = document.querySelector('.registerUser-form-pass');
  //const btnShowPass = document.querySelector('.btn-showPass');
  const iconHidePass = document.querySelector('.btn-hidePass-svg');
  const iconShowPass = document.querySelector('.btn-showPass-svg');

  if (inputPass.type == "password") {
    inputPass.type = "text";
    iconHidePass.classList.remove('hidden');
    iconShowPass.classList.add('hidden');
  } else {
    inputPass.type = "password";
    iconShowPass.classList.remove('hidden');
    iconHidePass.classList.add('hidden');
  }
};

////////////////////////////////////////////////////////////
// input confirm password
const inputConfirmPassFocusIn = () => root.style.setProperty('--borderFieldPassConfirm', '#2e466f');
const inputConfirmPassBlur = () => root.style.setProperty('--borderFieldPassConfirm', '#a1a1a1');
const inputConfirmPassKeyUp = () => {

  const inputPass = document.querySelector('.registerUser-form-pass');
  const inputPassConfirm = document.querySelector('.registerUser-form-passConfirm');
  const textErrorPassConfirm = document.querySelector('.registerUser-form-passConfirm-p');

  if (inputPassConfirm.value === inputPass.value) {
    textErrorPassConfirm.textContent = '';
    root.style.setProperty('--borderFieldPassConfirm', 'green');
  } else {
    root.style.setProperty('--borderFieldPassConfirm', '#f63737');
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden';
  }
};
const showConfirmRegister = () => {
  const inputPassConfirm = document.querySelector('.registerUser-form-passConfirm');
  const iconShowPassConfirm = document.querySelector('.btn-showPassConfirm-svg');
  const iconHidePassConfirm = document.querySelector('.btn-hidePassConfirm-svg');

  if (inputPassConfirm.type === 'password') {
    inputPassConfirm.type = 'text';
    iconHidePassConfirm.classList.remove('hidden');
    iconShowPassConfirm.classList.add('hidden');
  } else {
    inputPassConfirm.type = 'password';
    iconShowPassConfirm.classList.remove('hidden');
    iconHidePassConfirm.classList.add('hidden');
  }
};

export { inputNameKeyUp, inputNameFocusIn, inputNameBlur, inputNumberFocusIn, inputNumberBlur, inputNumberKeyUp, inputPassFocusIn, inputPassBlur, showPassRegister, inputConfirmPassFocusIn, inputConfirmPassBlur, inputConfirmPassKeyUp, showConfirmRegister };
