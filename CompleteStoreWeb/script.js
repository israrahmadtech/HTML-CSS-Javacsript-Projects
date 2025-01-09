// ........  Navigation Bar   .................
const hamburger = document.querySelector('.hamburger')
const hamBtn = document.getElementById('hamBtn')
const hamMenu = document.querySelector('.hamMenu')
const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3')

hamBtn.addEventListener('click', function(){
    hamMenu.classList.toggle('moveMenu')
    span1.classList.toggle('removeSpan1')
    span2.classList.toggle('rotateSpan2')
    span3.classList.toggle('rotateSpan3')
    hamburger.classList.toggle('moveHam')
})

// ......  Cart ....................
const cartBtn = document.querySelector('.removeBtn')
cartBtn.addEventListener('click', function(){
    const cartProduct = document.querySelector('.removeProduct')
    cartProduct.style.display = 'none'
})
// cart Product Increament and decreament
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
increase.addEventListener('click', function(){
    const productValue = document.getElementById('productValue')
    const changeValue = parseInt(productValue.innerHTML)
    if(changeValue < 9){
        productValue.innerHTML = changeValue+1;
    }
})
decrease.addEventListener('click', function(){
    const productValue = document.getElementById('productValue')
    const changeValue = parseInt(productValue.innerHTML)
    if(changeValue > 1){
        productValue.innerHTML = changeValue-1;
    }
})

// console.log(50/3)

