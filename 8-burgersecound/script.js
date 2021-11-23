


let open = document.querySelector('#button-open');
let menu = document.querySelector('.hidemenu')
let close = document.querySelector('.closed')


open.addEventListener('click', event => {
    menu.classList.toggle('open');
    open.style.display = 'none';
    close.style.display = 'block';
})

close.addEventListener('click', event => {
    menu.classList.toggle('open');
    open.style.display = 'block';
    close.style.display = 'none';
})