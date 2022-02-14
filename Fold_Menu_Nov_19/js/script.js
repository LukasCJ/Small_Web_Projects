const nav = document.getElementById('navLinks')
const burger = document.getElementById('burger')

function toggleMenu() {
    
    nav.classList.toggle('navActive')

    burger.classList.toggle('crossedLine')

}

burger.addEventListener('click', toggleMenu)