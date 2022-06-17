var div_1 = document.querySelector('.div-1')
var div_2 = document.querySelector('.div-2')
var button_1 = document.querySelector('.button-1')
var button_2 = document.querySelector('.button-2')

button_1.addEventListener('click', function(){
    make_dark(div_1)
    make_light(div_2)
    button_1.classList.add('hidden')
    button_2.classList.remove('hidden')
})

button_2.addEventListener('click', function(){
    make_dark(div_2)
    make_light(div_1)
    button_2.classList.add('hidden')
    button_1.classList.remove('hidden')
})

function make_dark(element) {
    element.classList.add('dark')
}

function make_light(element) {
    element.classList.remove('dark')
}