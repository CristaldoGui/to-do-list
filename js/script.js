//pegar o texto do input
const inputTask = document.getElementById('input-task');
const form = document.getElementById('form');
const divInput = document.getElementById('div-input');


//função para setar atributos de elementos HTML
function setAttributeElement(element, attributes){
    for(let key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

//função para adicionar classes a elementos HTML
function addClass(element, ...classes){
    classes.forEach(classToAdd =>{
      element.classList.add(classToAdd);  
    })
}

//função para criar elementos HTML
function createElementHtml(element){
    return document.createElement(element);
}

//função que cria todo o HTML da TASK e adiciona na tag FORM
function createInputTask(text){
    //cria o elemento DIV e atribui uma classe a ele 
    let div = createElementHtml('div');
    setAttributeElement(div, {
        onclick: 'taskCheked(this, event)' 
    });

    addClass(div, 'img-animation', 'div-task');

    //cria o elemento IMG e seta seus atributos
    let img = createElementHtml('img');
    setAttributeElement(img, {
        src: './images/unchecked.png',
        width: '24px',
        alt: 'Icon'
    })

    //cria o elemento P e adiciona o seu texto
    let p = createElementHtml('p');
    addClass(p, 'input-task-check');
    text = document.createTextNode(text);
    p.appendChild(text);

    //cria o elemento INPUT e atribui seu value
    let buttonExclue = createElementHtml('buttonExclue');
    setAttributeElement(buttonExclue, {
        type: 'submit',
        onclick: 'excludeTask(this)',
        value: 'x'
    })

    //colocando os elementos dentro dos outros
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(buttonExclue);
    form.appendChild(div)
}

function addTask(){
    //pega o texto do input e atribui a variavel task
    let task = inputTask.value;

    //se a task estiver vazia não permite q ela seja adicionada e avisa o usuário
    if(task == ''){
        return alert('Você não pode adicioanar uma task vazia');
    }

    //chama a função q cria o HTML da task e passa o variavel task q contem o valor da task 
    createInputTask(task);

    //limpa o input apos a task ser adicionada 
    inputTask.value = '';
}


function excludeTask(click){
    //acha a div do botão q foi clicado e exclui ela 
    click.closest('.div-task').remove();
}

function taskCheked(click, event){
    //pega o elemento P da task que foi clicada
    let p = click.querySelector('.input-task-check');

    //pega o elemento IMG da task que foi clicada
    let img = click.querySelector('img');

    //Checa se o elemnento que foi clicado foi a imagem 
    if(event.target == img){
        //Verifica se a imagem já etá checada, se não checa ela 
        if(img.getAttribute('src') == './images/checked.png'){
            img.setAttribute('src', './images/unchecked.png');
            p.classList.remove('task-checked');

        }else{
            img.setAttribute('src', './images/checked.png');
            addClass(p, 'task-checked');
        } 
    }
    
}
