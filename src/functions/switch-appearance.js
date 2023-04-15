const makeDark = () => {
  let root = document.querySelector(':root');
  document.querySelector('.btnLight').classList.remove('hidden');
  document.querySelector('.btnDark').classList.add('hidden');

  root.style.setProperty('--blurSwitch', 'rgba(0,0,0,0.2)');
  root.style.setProperty('--blurSwitchBorder', 'rgba(255,255,255,0.6)');
  root.style.setProperty('--ff', 'black');
  root.style.setProperty('--bg', '#070707');
  root.style.setProperty('--black18', '#fff');
  root.style.setProperty('--mainColor-shade', '#43597d');
  root.style.setProperty('--borderCardsWhyHS', '#121212');
  root.style.setProperty('--bgCardsWhyHS', '#141414');
  root.style.setProperty('--bgPost', '#141414');
};


const makeLight = () => {
  let root = document.querySelector(':root');
  document.querySelector('.btnLight').classList.add('hidden');
  document.querySelector('.btnDark').classList.remove('hidden');

  root.style.setProperty('--blurSwitchBorder', 'rgba(0,0,0,0.6)');
  root.style.setProperty('--blurSwitch', 'rgba(255, 255, 255, 0.2)');
  root.style.setProperty('--ff', '#fff');
  root.style.setProperty('--bg', '#f2f2f7');
  root.style.setProperty('--black18', '#181818');
  root.style.setProperty('--mainColor-shade', '#293f64');
  root.style.setProperty('--borderCardsWhyHS', '#c1c1c1');
  root.style.setProperty('--bgCardsWhyHS', '#fff');
  root.style.setProperty('--bgPost', '#fff');
};

export { makeDark, makeLight };