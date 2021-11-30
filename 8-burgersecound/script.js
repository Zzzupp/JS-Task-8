


let open = document.querySelector('#button-open');
let menu = document.querySelector('#hidemenu')
let close = document.querySelector('.closed')
let hidemenu = document.querySelector('.hidemenu')

open.addEventListener('click', event => {
    menu.classList.add('open');
    open.style.opacity = '0';
    close.style.opacity = '1';
    close.style.visibility= 'hidden';
})

close.addEventListener('click', event => {
    menu.classList.remove('open');
    open.style.opacity = '1';
    close.style.opacity = '0';
    close.style.visibility= 'visible';
})
// window.addEventListener('click', (event) =>{
//     if(event.target !== hidemenu && event.target !== open){
//         hidemenu.classList.remove('open');
//     }
//     open.style.opacity = '1';
//     close.style.opacity = '0';
// })


 