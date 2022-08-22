var grow = document.querySelector('.grow')
var shrink = document.querySelector('.shrink')
var colorClick = document.querySelector('.color-click')
var border = document.querySelector('.border')
var dashedBorder = document.querySelector('.dashed-border')
var solidBorder = document.querySelector('.solid-border')

grow.addEventListener('click', function(){
    if (grow.classList.contains('bigger')){
        grow.classList.remove('bigger')
    }
    else {
        grow.classList.add('bigger')
    }
})

shrink.addEventListener('click', function(){
    if (shrink.classList.contains('smaller')){
        shrink.classList.remove('smaller')
    }
    else {
        shrink.classList.add('smaller')
    }
})

colorClick.addEventListener('click', function(){
    console.log('funtion started')
    var color = document.querySelector('.color')
    if (color.classList.contains('color-change')){
        color.classList.remove('color-change')
    }
    else {
        color.classList.add('color-change')
    }
})

border.addEventListener('click', function(){
    if (border.classList.contains('border-change')){
        border.classList.remove('border-change')
    }
    else {

        border.classList.add('border-change')
    }
})

var dashed = false;
dashedBorder.addEventListener('click', function(){
    if (!dashed){
        dashedBorder.classList.add('visible-dash')
        solidBorder.classList.add('invisible-border')
        dashed = true;
    }
    else {
        dashedBorder.classList.remove('visible-dash')
        solidBorder.classList.remove('invisible-border')
        dashed = false;
    }
})