var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var selectedButtons = document.querySelectorAll('.plan button')
var negative = document.querySelector('.modal__action--negative')
var toggle = document.querySelector('.toggle-button')
var mob_nav = document.querySelector('.mobile-nav')

// add event listeners to buttons and set action
for (var i=0; i<selectedButtons.length; i++){
    selectedButtons[i].addEventListener('click', function (){
        // backdrop.style.display = 'block'
        // modal.style.display = 'block'
        backdrop.classList.add('open')
        modal.classList.add('open')

    })
}

// add event listener to backdrop and set action
backdrop.addEventListener('click', close_modal)

if (modal){
    negative.addEventListener('click', close_modal)
}

function close_modal(){
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    // mob_nav.style.display = 'none'
    backdrop.classList.remove('open')
    if (modal){
        modal.classList.remove('open')
    }
    mob_nav.classList.remove('open')
}


toggle.addEventListener('click', function() {
    // mob_nav.style.display = 'block'
    // backdrop.style.display = 'block'
    mob_nav.classList.add('open')
    backdrop.classList.add('open')
}) 