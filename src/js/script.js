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

const closePopupBtn = document.querySelector('#close-popup');
const openPopupBtn = document.querySelector('#ask-btn');
const popupCall = document.querySelector('#call');

openPopupBtn.addEventListener('click', onOpenPopupBtnClick);

function initCallPopupListeners(){
    closePopupBtn.addEventListener('click',onClosePopupBtnClick);
    document.addEventListener('keydown', onCallPopupEscKeydown);
    popupCall.addEventListener('click', onCallPopupClick);
}

function removeCallPopupListeners(){
    closePopupBtn.removeEventListener('click',onClosePopupBtnClick);
    document.removeEventListener('keydown', onCallPopupEscKeydown);
    popupCall.removeEventListener('click', onCallPopupClick);
}

function onOpenPopupBtnClick(e){
    e.preventDefault();
    openPopup(popupCall);
    initCallPopupListeners();
}

function onClosePopupBtnClick(e){
    e.preventDefault();
    closePopup(popupCall);
    removeCallPopupListeners();
}

function openPopup(popupActive){
    popupActive.classList.add('popup--active');  
}

function closePopup(popupActive){
    popupActive.classList.remove('popup--active');  
}

function onCallPopupEscKeydown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closePopup(popupCall);
      removeCallPopupListeners();
    }
  }
  
  function onCallPopupClick(e) {
    if (e.target.classList.contains('popup')) {
        closePopup(popupCall);
        removeCallPopupListeners();
    }
  }