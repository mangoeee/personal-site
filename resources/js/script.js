const nav = document.querySelector('.nav')
const currentPage = document.querySelectorAll('.page')
const infoPos = document.getElementById('info')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 100) {
        nav.classList.add('active')
        infoPos.classList.add('active')
    } else {
        nav.classList.remove('active')
        infoPos.classList.remove('active')
    }
}

currentPage.forEach((page) => {
    page.addEventListener('click', () => {
        removeActiveClasses()
        page.classList.add('current')
    })
})

function removeActiveClasses() {
    currentPage.forEach(page => {
        page.classList.remove('current')
    })
}