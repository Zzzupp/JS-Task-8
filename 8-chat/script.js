let submitt = document.querySelector('.submit');
let ul = document.querySelector('.ul');
let input = document.querySelector('.input');



submitt.addEventListener('click', event => {
    
    if (input.value == ''){
        alert('Please enter text!')
    } else{
        event.preventDefault();
        let li = document.createElement('li');
        let remove = document.createElement('button'); 
        let checkbox = document.createElement('input');
        remove.innerText = 'Remove';
        remove.style.marginLeft= '20px';
    
    
        
    
        checkbox.type = 'checkbox';
        checkbox.style.marginRight= '20px';
        li.innerText = input.value;
        li.prepend(checkbox);
        li.append(remove);
        ul.appendChild(li);
        input.value = '';
        remove.addEventListener('click', event =>{
            li.remove();
        })
        checkbox.addEventListener('click', event =>{
            if (checkbox.checked){
                li.style.textDecoration = 'line-through';
                ul.append(li);
    
            } else {
                li.style.textDecoration = 'none';
                ul.prepend(li);
            }
        }) 
    }
    

})