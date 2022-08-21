var grow = document.querySelector('.grow')
var shrink = document.querySelector('.shrink')
var colorClick = document.querySelector('.color-click')

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


