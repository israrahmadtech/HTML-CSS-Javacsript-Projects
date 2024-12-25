const email = document.getElementById('email').value
const phone = document.getElementById('phone').value
const btn1 = document.getElementById('btn1')
const form = document.getElementById('form')
btn1.addEventListener('click', function(e){
    if(email.length < 3 || phone.length < 3){
        form.innerHTML = `<h2>Please refresh the page</h2> <h2>And Submit the form correctly</h2>`
    } else{
        form.innerHTML = `<h2>Thank you for contacting us</h2> <h2>We Will Respond You as Soon as Possible</h2>`
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