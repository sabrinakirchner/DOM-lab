const mainEL = document.querySelector('main');
const mainBigColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');

mainEL.style.backgroundColor = 'var(${mainBgColor})'; 

mainEL.innerHTML ='<h1>SEI Rockes!</h1>';

mainEL.classList.add('flex-ctr'); 

const topMenuEL = document.querySelector('#top-menu'); 