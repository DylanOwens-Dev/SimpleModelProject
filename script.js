'use strict';

let modalBtns = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close-modal');

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

closeBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', hideModal());

// if (overlay.classList.contains('hidden')) {
// } else {
//   overlay.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });
// }
