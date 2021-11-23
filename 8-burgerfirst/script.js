

let btnOpen = document.querySelector('.btnopen');
let nav = document.querySelector('#navvv');
let btnClose = document.querySelector('.cross')


btnOpen.addEventListener('click', (event) =>{
    nav.classList.add('open');
    btnOpen.style.display = 'none';
})
btnClose.addEventListener('click', (event) =>{
    nav.classList.remove('open');;
    btnOpen.style.display = 'block';
})



 