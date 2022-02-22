
let cardTitle = document.querySelector('.card-body')
let list = document.querySelector('.list-group')
list.addEventListener('click', event => {
    event.preventDefault();
    if(event.target.id){
        let id = event.target.id;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((newResponse) => {
                if(newResponse.ok){
                    return newResponse.json();;
                } else {
                    throw new Error('something error')
                }   
                
            })
            .then((newData) => {
                newRender(newData, id);
            })
            .catch((error)=>{
                new Error(error + 'something went wrong');
            })
    } else {
        return
    }

})


function newRender(newData, id){
    id = Number(id);
    newData.forEach(item => {
        if(item.id === id){
            

            let renderMessage = `
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">NickName: ${item.username} <br> Email: ${item.email} <br> Mobile phone: ${item.phone}</p>
            <p class="card-text"><small class="text-muted">From: ${item.address.city}</small></p>
            `
            cardTitle.innerHTML = renderMessage;
        } else{
            console.log('gg')
        }
    })
}



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error('something error')
        }
    })
    .then((data) => {
    console.log(data);
    render(data);
    });


function render(data) {
    let k = 0;
    data.forEach((obj) => {
        k++;
        console.log(obj);
        let name = obj.name;
        console.log(name);
        let renderList = `
        <button type="button" class="list-group-item list-group-item-action" id = '${k}'>${name}</button>
        `
        list.innerHTML += renderList;
        

    })
}