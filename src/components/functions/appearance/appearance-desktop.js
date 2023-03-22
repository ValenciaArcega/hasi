const makeDarkOnDesk = () => {
  let root = document.querySelector(':root');
  document.querySelector('.navBar__desktop-light').classList.remove('hidden');
  document.querySelector('.navBar__desktop-dark').classList.add('hidden');

  root.style.setProperty('--ff', 'black');
  root.style.setProperty('--mainColor-shade', '#43597d');
};


const makeLightOnDesk = () => {
  let root = document.querySelector(':root');
  document.querySelector('.navBar__desktop-light').classList.add('hidden');
  document.querySelector('.navBar__desktop-dark').classList.remove('hidden');

  root.style.setProperty('--ff', '#fff');
  root.style.setProperty('--mainColor-shade', '#293f64');
};

export { makeDarkOnDesk, makeLightOnDesk };