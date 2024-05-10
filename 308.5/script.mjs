const str = `You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go`
// let newStr = str.split(" ")
// console.log(newStr);
// console.log(`This string has ${newStr.length} words.`);
let wordCount = 0;

for (let char in str) {
    if (char = ` `) {
        wordCount++;
    } else if (i ) {
    }
    console.log(wordCount);
}


// sandwich problem
let numSandwiches = 5;
let cheeseSlices = 2;
let numPeople = 5;

// function declaration - hoistable
function sayHello() {
    console.log(`hello`);
}

// function expression
let sayingHello= function () {
    console.log(`Hello`);
}

// arrow function
const saidHello = () => {
    console.log(`I said HELLO!`);
}

sayHello();
sayingHello();
saidHello();

// exercise

function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
}
console.log(areBothEven(13, 23));


// write a function declaration
function computeArea(w, h) {
    let area = w * h;
    let string = `The area of a rectangle with a width of ${w} and a height of ${h} is ${area} square units.`
    return string;
}

console.log(computeArea(2, 4));

// planet problem as a function declaration
// function planetHasWater(planet) {
//     if (planet == "Earth" || planet == "Mars") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(planetHasWater("Venus"));

// planet problem as a function expression

const planetHasWater = function(planet) {
    planet = planet.toLowerCase();
    console.log(planet);
    if (planet == "earth" || planet == "mars") {
        return true;
    } else {
        return false;
    }
}
console.log(planetHasWater("MARS"));
console.log(planetHasWater("venus"));
console.log(planetHasWater("Uranus"));
console.log(planetHasWater("PLutO"));


// // planet problem as an arrow function
// const planetHasWater = (planet) =>  {
//     planet = planet.toLowerCase();
//     console.log(planet);
//     if (planet == "earth" || planet == "mars") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(planetHasWater("venus"));
let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');

// function getDevObject(name) {
//     let skills = [];
//     for (let i = 1; i < arguments.length; i++) {
//       skills.push(arguments[i]);
//     }
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }
//   console.log(getDevObject(maria));

//  same thing but using rest parameters, which use the spread operator. 
// in the parameters, put the first and the last 
// use this instead of the above instead!! 

  function getDevObject(name, ...skills) {
    return {
      devName: name,
      jobSkills: skills
    };
  }

  console.log(getDevObject(maria));


  // calculator function as hoisting example
console.log(calculate("+", 13, 13));

function calculate(oper, num1, num2) {
    switch(oper) {
        case "+":
            return sum (num1, num2)
            break;
        case "-":
            return subtract(num1, num2)
    }
}

function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}