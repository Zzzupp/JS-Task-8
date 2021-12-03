


let open = document.querySelector('#button-open');
let menu = document.querySelector('#hidemenu')
let close = document.querySelector('.closed')
let hidemenu = document.querySelector('.hidemenu')

open.addEventListener('click', event => {
    menu.classList.add('open');
    open.style.opacity = '0';
    close.style.opacity = '1';
    close.style.visibility= 'visible';
})

close.addEventListener('click', event => {
    menu.classList.remove('open');
    open.style.opacity = '1';
    close.style.opacity = '0';
    close.style.visibility= 'hidden';
})
 window.addEventListener('click', (event) =>{
        if(!menu.contains(event.target) && !open.contains(event.target)){
            menu.classList.remove('open');
            open.style.opacity = '1';
            close.style.opacity = '0';
            close.style.visibility= 'hidden';
    
        }
    })


 
