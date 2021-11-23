

let openBtn = document.querySelector('.btnopen');
let popup = document.querySelector('#popup')
let closeBtn = document.querySelector('.popupbtn')

openBtn.addEventListener('click', (event) => {
    popup.classList.add('open');
})

closeBtn.addEventListener('click', (event) => {
    popup.classList.remove('open');
})

window.addEventListener('click', (event) => {
    if(event.target == popup) {
        popup.classList.remove('open');
    }
})