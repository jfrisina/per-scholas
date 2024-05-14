//Get body from document/html page

let body = document.getElementsByTagName('body');

//Create all needed elements

let div1 = document.createElement('div');

let div2 = document.createElement('div');

let orderedList = document.createElement('ol');

let unorderedList = document.createElement('ul');

createLi(orderedList);

createLi(unorderedList);

body[0].appendChild(div1).appendChild(orderedList);

body[0].appendChild(div2).appendChild(unorderedList);

//Functions for DRY code

function createLi(list) {

  for (let i = 0; i < 3; i++) {

    let li = document.createElement('li');

    list.appendChild(li);

  }

}