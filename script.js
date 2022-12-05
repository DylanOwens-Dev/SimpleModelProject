'use strict';

//variables of object needs for script from html
let modalBtns = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close-modal');

//function that hides modal
function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//function that show modal
function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//loop through the btns and show modal on click
for (let i = 0; i < modalBtns.length; i++)
  modalBtns[i].addEventListener('click', showModal);

//hide modal on click of X btn
closeBtn.addEventListener('click', hideModal);

//hide modal on click of overlay
overlay.addEventListener('click', hideModal);

//hide modal on click of escape key
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    hideModal();
  }
});
