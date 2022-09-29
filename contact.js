const form = document.getElementById('form');
const errorContainer = document.getElementById('errors');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const f = Object.values(form);

    input.classList.remove('errors');

    let isValid = true;

    for (const input of f){
        console.log(`Input ${input.id} has value ${input.value}`);

        switch(input.id){
            case 'email':
                break;    
        }
    }

    if(error !== null){
        input.classList.add('error');
        const el = document.createElement('span');
        el.innerText 
    }

    for(const e of errors){
        const item = document.createElement('li');
        item.innerText = e;
        errorContainer.innerText += e;
    }

    form.submit();
});