// Inicializamos las variables
let input = document.querySelector('#tareaNueva');
let btn = document.querySelector('#agregarbtn');
let list = document.querySelector('#list');
let elimHecho = document.querySelector('#tareaHechas');
let elimTodo = document.querySelector('#todo');

// Funcionalidades del boton
btn.addEventListener('click', function() {
    let txt = input.value;
    if (txt === "") {
        alert("El texto ingresado esta vacio");
    } else {
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
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
    console.log(list.childNodes.length);
    for (let i = 0; i < maxList; i++) {
        if (list.childNodes[i].classList[0] === 'checked') {
            list.removeChild(list.childNodes[i]);
            maxList--;
        }
    }
});
elimTodo.addEventListener('click', function(ev) {
    while (list.childNodes[0]) {
        list.removeChild(list.childNodes[0]);
    }
});