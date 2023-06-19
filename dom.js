//task 1.0
const mainEL = document.querySelector('main');

//task 1.1
const mainBigColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');
mainEL.style.backgroundColor = 'var(${mainBgColor})'; 

//task 1.2
mainEL.innerHTML ='<h1>SEI Rockes!</h1>';

//task 1.3 
mainEL.classList.add('flex-ctr'); 

//task 2.0 
const topMenuEL = document.getElementById('#top-menu'); 

//task 2.1
topMenuElement.style.height ='100%'; 

//task 2.2 
const topMenuBgColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');
topMenuEL.style.backgroundColor = 'var(${topMenuBgColor})'; 

//task 2.3 
topMenuEL.classList.add('flex-around'); 

//task 3.0
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//task 3.1 
menuLinks.forEach(link=> {
    const newLink = document.createElement('a');
    newLink.href = link.href;
    newLink.textContent = link.text; 
    topMenuEL.appendChild(newLink); 
});


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
//task 5.5
clickedElement.classList.add('active'); 

//task 5.6
const linkObject = menuLinks.find(link => link.text === clickedElement.textContent);
showingSubMenu = linkObject && linkObject.sublinks? true : false;

//task 5.7
if(showingSubMenu){
    buildSubMenu(linkObject.subLinks);
    subMenuEl.style.top = '100%';
}else{
    subMenuEl.style.top = '0';
}
});

function buildSubMenu(subLinks){
    subMenuEl.innerHTML = '';

    subLinks.forEach(link => {
        const newLink = document.createElement('a');
        newLink.href = link.href; 
        newLink.textContent = link.text; 
        subMenuEl.appendChild(newLink);
    });
}

// task 6.0 
subMenuEl.addEventListener('click',function(event){
   event.preventDefault();

   const clickedElement = event.target;
   if(!clickedElement.matches('a')){
    return;
   }
   console.log(clickedElement.textContent);
});

//task 6.1   
showingSubMenu = false; 
subMenuEl.style.top = '0';

//task 6.2 
topMenuLinks.forEach(link => {
    link.classList.remove('active');
});

mainEl.innerHTML = '<h1>${clickedElement.textContent}</h1>';

if (clickedElement.textContent.toLowerCase()=== 'about'){
    mainEL.innerHTML ='<h1>about</h1>';    
}

