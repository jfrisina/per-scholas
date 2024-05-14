let textInput = document.getElementById('textBox');

let inputButton = document.getElementsByName('btn');

let header = document.querySelectorAll('h1');

let listDiv = document.getElementById('todoList');

let list = document.createElement('ul');

let newTodo = document.createElement('li');

newTodo.innerText = 'Eat Lunch in 15min';

let anotherTodo = document.createElement('li');

anotherTodo.innerText = `Eat second lunch in 1 hour`;

listDiv

    .appendChild(list)

    .appendChild(newTodo);

    .prependChild(anotherTodo);