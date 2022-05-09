var planButtons = document.querySelectorAll('.plan button')
var toggle_button = document.querySelector('.toggle-button')
var mobile_nav = document.querySelector('.mobile-nav')
var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalActionsNeg = document.querySelector('.modal__action--negative')

for (var i = 0; i < planButtons.length; i++){
    planButtons[i].addEventListener('click', function(){
        backdrop.classList.add('open')
        modal.classList.add('open')
    })
    }


toggle_button.addEventListener('click', function(){
    console.dir(backdrop)
    backdrop.classList.add('open')
    mobile_nav.classList.add('open')
})

if (modalActionsNeg){
    modalActionsNeg.addEventListener('click', close)
}

backdrop.addEventListener('click', close)


function close(){
    backdrop.classList.remove('open')
    if (modal){
        modal.classList.remove('open')
    }
    if (mobile_nav){
        mobile_nav.classList.remove('open')
    }
}

