
let navBar = document.querySelector('.navbar');
let barsBtn = document.querySelector('#bars-btn')
let searchBox = document.querySelector('.search-box');
let searchBtn = document.querySelector('#search-btn');
let userBtn = document.querySelector('#user-btn');
let linksBttons = document.querySelector('.links-buttons');



userBtn.addEventListener('click', () => {
  userBtn.classList.toggle('fa-times');
  linksBttons.classList.toggle('active');
  searchBox.classList.remove('active');
  navBar.classList.remove('active');
});




searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBox.classList.toggle('active');
  navBar.classList.remove('active');
});

barsBtn.addEventListener('click', () => {
  barsBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
  searchBox.classList.remove('active');
});

window.scroll = () => {
  navBar.classList.remove('active');
  searchBox.classList.remove('active');

};
let registerBtn = document.querySelector('.form-box  .register-btn');
let loginBtn = document.querySelector('.form-box  .login-btn');
registerBtn.onclick = () => {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  document.querySelector('.form-box  .register-form').classList.add('active');
  document.querySelector('.form-box  .login-form').classList.remove('active');
};
loginBtn.onclick = () => {
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
  document.querySelector('.form-box .login-form').classList.add('active');
  document.querySelector('.form-box  .register-form').classList.remove('active')
};