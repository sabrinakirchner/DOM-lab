//task 1.0
const mainEL = document.querySelector('main');
//task 1.1 
const mainBigColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');

mainEL.style.backgroundColor = 'var(${mainBgColor})'; 
//task 1.2
mainEL.innerHTML ='<h1>SEI Rockes!</h1>';
//task 1.3
mainEL.classList.add('flex-ctr'); 
//task 2.2 //task 2.3 
const topMenuEL = document.querySelector('#top-menu'); 

//task 3.0 //task 5.0
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

  //task 3.1

  menuLinks.forEach(link =>{
    const newLink = document.createElement('a');
    newLink.href = link.href;
    newLink.textContent = link.text; 
    topMenuEL.appendChild(newLink);
  });

//_____________________________________________//

//task 4.0
const subMenuEl = document.querySelector('#sub-menu');

//task 4.1
subMenuEl.style.height = '100%'; 

//task 4.2 
const subMenuBgColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg'); 
subMenuEl.style.backgroundColor = subMenuBgColor; 

//task 4.3 
subMenuEl.classList.add('flex-around'); 

//task 4.4
subMenuEl.style.position = 'absolute';

//task 4.5
subMenuEl.style.top ='0';

//task 5.1 
const topMenuLinks = topMenuEl.querySelectorAll('a');

//task 5.2
let showingSubMenu = false;

topMenuEl.addEventListener('click', function(event){
    event.proventDefault();

    const clickedElement = event.target;
    if(!clickedElement.matches('a')){
        return;
    }

    console.log(clickedElement.textContent); 
});

//task 5.3
if (clickedElement.classList.contains('active')){
    clickedElement.classList.remove('active');
    showingSubMenu = false; 
    subMenuEl.style.top = '0';
    return; 
}

//task 5.4
topMenuLinks.forEach(link =>{
    link.classList.remove('active');
}); 

