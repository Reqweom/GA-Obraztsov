const burger = document.querySelector('#burger');
const burgerMenu = document.querySelector('.nav__menu')
let menuOpen = false;

(function (){
    burgerMenu.classList.remove('nav__menu--active');
    burger.classList.remove('burger--active');
}());

burger.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!menuOpen){
        burger.classList.add('burger--active');
        burgerMenu.classList.add('nav__menu--active');
        menuOpen = true;
    }
    else{
        burger.classList.remove('burger--active');
        burgerMenu.classList.remove('nav__menu--active');
        menuOpen = false;
    }
})