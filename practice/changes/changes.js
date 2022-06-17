var square = document.querySelector('.square')
var redButton = document.querySelector('.redButton')
var greenButton = document.querySelector('.greenButton')

redButton.addEventListener('click', function(){
    redButton.classList.add('no-display')
    greenButton.classList.remove('no-display')
    square.style.background = 'rgb(156, 8, 8)'
})

greenButton.addEventListener('click', function(){
    greenButton.classList.add('no-display')
    redButton.classList.remove('no-display')
    square.style.background = 'rgb(3, 165, 116)'
})
