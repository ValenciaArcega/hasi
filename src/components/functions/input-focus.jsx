let root = document.querySelector(':root');

const focusFieldID = () => root.style.setProperty('--fieldID', '#2e466f');
const blurFieldID = () => root.style.setProperty('--fieldID', '#d1d1d1');

const blurFieldPass = () => root.style.setProperty('--fieldPassword', '#d1d1d1');
const focusFieldPass = () => {
  document.querySelector('.input-login-pass').value = null;
  root.style.setProperty('--fieldPassword', '#2e466f');
};

export { focusFieldID, blurFieldID, focusFieldPass, blurFieldPass };
