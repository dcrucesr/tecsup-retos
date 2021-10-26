// Inicializamos las variables
let input = document.querySelector('#tareaNueva');
let btn = document.querySelector('#agregarbtn');
let list = document.querySelector('#list');
let elimHecho = document.querySelector('#tareaHechas');
let elimTodo = document.querySelector('#todo');

cargar_localStorage();

// Cargar el local Storage
function cargar_localStorage() {

    for (let i = 0; i < localStorage.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = localStorage.key(i);
        li.innerHTML = localStorage.getItem(localStorage.key(i));
        list.insertBefore(li, list.childNodes[list.childNodes.length - 1]);
    }
}

// Guardar en local Storage
function guardar_localStorage(i, item) {
    localStorage.setItem(i, item);
}


// Funcionalidades del boton
btn.addEventListener('click', function() {
    let txt = input.value;
    if (txt === "") {
        alert("El texto ingresado esta vacio");
    } else {
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[list.childNodes.length - 1]);
        localStorage.setItem(list.childNodes.length - 2, txt);
        input.value = '';
    }
});

// Funcionalidad de presionar la lista
list.addEventListener('click', function(ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');
    }
});
// Funcionalidades de eliminar
elimHecho.addEventListener('click', function(ev) {
    let maxList = list.childNodes.length - 1;
    for (let i = 0; i < maxList; i++) {
        if (list.childNodes[i].classList[0] === 'checked') {
            list.removeChild(list.childNodes[i]);
            localStorage.removeItem(i);
            maxList--;
            i--;
        }
    }
});
elimTodo.addEventListener('click', function(ev) {
    while (list.childNodes[0]) {
        list.removeChild(list.childNodes[0]);
    }
    localStorage.clear();
});