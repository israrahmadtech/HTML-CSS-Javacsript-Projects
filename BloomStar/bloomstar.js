const email = document.getElementById('email')
const phone = document.getElementById('phone')
const btn1 = document.getElementById('btn1')
const form = document.getElementById('form')
const formPara = document.getElementById('formPara')
form.addEventListener('submit', function(e){
    e.preventDefault()
})
btn1.addEventListener('click', function(){
    formPara.classList.add('formPara')
    if(email.value.length < 3 || phone.value.length < 3){
        formPara.innerHTML = `Please enter the data correctly`
    } else{
        form.innerHTML = `<h1>Thank you for contacting us We Will Respond You as Soon as Possible</h1>`
    }
})

// .......  Hamburger  ...............
const span1 = document.getElementById('span1')
const span2 = document.getElementById('removeSpan')
const span3 = document.getElementById('span3')
const hamburger = document.querySelector('.hamburger')
const  hamBtn = document.getElementById('hamBtn')
const hamLines = document.querySelector('.hamLines')
hamBtn.addEventListener('click', function(){
    span1.classList.toggle('span1')
    span2.classList.toggle('span2')
    span3.classList.toggle('span3')
    hamburger.classList.toggle('slideHam')
    hamLines.classList.toggle('moveLines')
    hamLines.classList.toggle('hamLinesFixed')
})