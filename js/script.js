//pegar o texto do input
const inputTask = document.getElementById('input-task');
const form = document.getElementById('form');
const divInput = document.getElementById('div-input');

function setAttributeElement(element, attr, value){
    element.setAttribute(attr, value);
}

function addClass(element, classToAdd){
    element.classList.add(classToAdd);
}

function createElementHtml(element){
    let el = document.createElement(element);

    return el;
}

function createInputTask(text){
    //cria o elemento DIV e atribui uma classe a ele 
    let div = document.createElement('div');
    setAttributeElement(div, 'onclick', 'taskCheked(this, event)');
    addClass(div, 'img-animation');
    addClass(div, 'div-task');

    //cria o elemento IMG e seta seus atributos
    let img = document.createElement('img');
    setAttributeElement(img, 'src', './images/unchecked.png');
    setAttributeElement(img, 'width', '24px');
    setAttributeElement(img, 'alt', 'Icon');

    //cria o elemento P e adiciona o seu texto
    let p = document.createElement('p');
    addClass(p, 'input-task-check');
    text = document.createTextNode(text);
    p.appendChild(text);

    //cria o elemento INPUT e atribui seu value
    let buttonExclue = document.createElement('input');
    setAttributeElement(buttonExclue, 'type', 'submit');
    setAttributeElement(buttonExclue, 'onclick', 'excludeTask(this)');
    setAttributeElement(buttonExclue, 'value', 'x');

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
            p.classList.add('task-checked');
        } 
    }
    
}
