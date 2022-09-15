const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const f = Object.values(form);

    for (const input of f){
        console.log(`Input ${input.id} has value ${input.value}`);

        switch(input.id){
            case 'email':
                break;    
        }
    } 

    form.submit();
});