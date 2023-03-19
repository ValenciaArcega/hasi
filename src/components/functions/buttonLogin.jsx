const reviewCredentials = () => {
  const IDField = document.querySelector('.input-login-id');
  const PASSField = document.querySelector('.input-login-pass');
  let flag = false;

  for (let i = 0; i < users.ids.length; i++) {
    if (IDField.value === users[i].number && PASSField.value === users[i].pin) {
      flag = true;
    }
  }

  if (this.flag) {
    flag = false;
    document.querySelector('.modal-doneLogin').classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else {
    flag = false;
    overlay.classList.remove('hidden');
    modalError.classList.remove('hidden');
  }
};

export default reviewCredentials;