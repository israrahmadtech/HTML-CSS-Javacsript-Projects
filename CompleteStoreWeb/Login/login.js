// ...............  LOGIN   .................. 
const hideLogin = document.getElementById('loginForm')
const hideRegister = document.getElementById('registerForm')
const loginBtn = document.getElementById('loginBtn')
const registerBtn = document.getElementById('RegisterBtn')

registerBtn.addEventListener('click', function(){
    hideLogin.classList.remove('loginRemove')
    hideRegister.classList.add('registerRemove')
})
loginBtn.addEventListener('click', function(){
    hideRegister.classList.remove('registerRemove')
    hideLogin.classList.add('loginRemove')
})


// ..............
const loginToggle = document.getElementById('loginToggle')
const registerToggle = document.getElementById('registerToggle')
const loginContainer = document.querySelector('.loginContainer')
const registerContainer = document.querySelector('.registerContainer')
loginToggle.addEventListener("click", function(){
    registerContainer.classList.add('removeRegister')
    loginContainer.classList.remove('removeLogin')
})
registerToggle.addEventListener("click", function(){
    loginContainer.classList.add('removeLogin')
    registerContainer.classList.remove('removeRegister')
})