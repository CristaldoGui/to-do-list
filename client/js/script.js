//pegar o texto do input
const inputTask = document.getElementById('input-task');
const form = document.getElementById('form');
const divInput = document.getElementById('div-input');

function createInputTask(text){
    //cria o elemento DIV e atribui uma classe a ele 
    let div = document.createElement('div');
    div.setAttribute('onclick', 'taskCheked(this, event)');
    div.classList.add('img-animation');
    div.classList.add('div-task');

    //cria o elemento IMG e seta seus atributos
    let img = document.createElement('img');
    img.setAttribute('src', './images/unchecked.png');
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
    //pega o texto do input e atribui a variavel task
    let task = inputTask.value;

    if(task == ''){
        return alert('Você não pode adicioanar uma task vazia');
    }

    //limpa o input apos a task ser adicionada 
    inputTask.value = '';

    //chama a função q cria o HTML da task e passa o variavel task q contem o valor da task 
    createInputTask(task);
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
            p.classList.add('task-checked');
        } 
    }
    
}
