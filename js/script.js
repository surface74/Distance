"use strict";

const createPostInput = document.querySelector('.create-post-input');
const mobileMenuButton = document.querySelector('.mobile-menu');
const menuSidebar = document.querySelector('.menu-sidebar');

createPostInput.innerHTML = '';

mobileMenuButton.addEventListener('click', e => {
  menuSidebar.classList.toggle('active');
})

createPostInput.addEventListener('blur', () => {
  if (!createPostInput.textContent) {
    createPostInput.innerHTML = '';
  }
})