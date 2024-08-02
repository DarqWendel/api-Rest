console.log('Antes do Fetch');


fetch('https://jsonplaceholder.typicode.com/users', console.log('executando o fetch'))
    .then(function(response) {
        console.log('pegando o response', response);
        
        return response.json()
    })  
    .then(function(json) {
        console.log('Pegando o json', json);
        
        // return console.log(json);

    })

    console.log('Finalizando o fetch');
    

    fetch('https://jsonplaceholder.typicode.com/users', console.log('executando o fetch'))
    .then(function(json) => response.json())
    .then(json => console.log(json));
    
    