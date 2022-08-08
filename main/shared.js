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
    backdrop.style.display = "block"
    setTimeout(function(){
        backdrop.classList.add('open')
    }, 10)
    

    mobile_nav.style.display = "block"
    setTimeout(function(){
        mobile_nav.classList.add('open-mob-nav')
    }, 10)
    
})

if (modalActionsNeg){
    modalActionsNeg.addEventListener('click', close)
}

backdrop.addEventListener('click', close)


function close(){
    backdrop.classList.remove('open')
    setTimeout(function(){
        backdrop.style.display = "none"
    }, 500)

    if (modal){
        modal.classList.remove('open')
    }
    if (mobile_nav){
        mobile_nav.classList.remove('open-mob-nav')
        setTimeout(function(){
            mobile_nav.style.display = "none"
        }, 500)
    }
}

