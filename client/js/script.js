//pegar o texto do input
const inputTask = document.getElementById('input-task');
const form = document.getElementById('form');
const divInput = document.getElementById('div-input');

function createInputTask(text){
    //cria o elemento DIV e atribui uma classe a ele 
    let div = document.createElement('div');
    div.classList.add('div-task')

    //cria o elemento IMG e seta seus atributos
    let img = document.createElement('img');
    img.setAttribute('src', './images/unchecked.png')
    img.setAttribute('width', '24px');
    img.setAttribute('alt', 'Icon');

    //cria o elemento P e adiciona o seu texto
    let p = document.createElement('p');
    p.classList.add('input-task-check');
    text = document.createTextNode(text);
    p.appendChild(text);

    //cria o elemento INPUT e atribui seu value
    let input = document.createElement('input');
    input.setAttribute('type', 'submit');
    input.setAttribute('onclick', 'excludeTask(this)')
    input.setAttribute('value', 'x');

    //colocando os elementos dentro dos outros
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(input);
    form.appendChild(div)
}

function addTask(){
    let task = inputTask.value;
    inputTask.value = " ";

    createInputTask(task);
}


function excludeTask(bnt){
    bnt.closest('.div-task').remove();
}

