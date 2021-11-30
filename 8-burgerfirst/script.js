

let btnOpen = document.querySelector('.btnopen');
let nav = document.querySelector('#navvv');
let btnClose = document.querySelector('.cross')
let toopen = document.querySelector('.wer')

btnOpen.addEventListener('click', (event) =>{
    event.preventDefault();
    nav.classList.add('open');
    btnOpen.style.display = 'none';
    toopen.style.display = 'block';
})
btnClose.addEventListener('click', (event) =>{
    event.preventDefault();
    nav.classList.remove('open');;
    btnOpen.style.display = 'block';
    toopen.style.display = 'none';
})

