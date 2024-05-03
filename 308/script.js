// Numbers
let num = 1;
let num2 = 12.21;

// Strings
let string = `hello`;

// Boolean
let boolean = true;
let bool = false;
let falseBool = 0;
let trueBool = 1;

// Null 
let nullValue = null;

// Undefined -  useful for input fields where user will put in info
let notHere;

// Objects
let obj = {
    data: 123;
    data2: 'thing';
    arr: [1,2,3,4];
}

// Scope
let x = 2 {
    let x = 8;
    console.log(x); //this one will return x = 8 because the console.log command is in the braces
}
console.log(x) //this one will return 2 because it's  outside of the braces


// Type of - use this to find out the data type of something
console.log (typeof 24);
console.log(typeof 'hello');

// ++ and -- will increment or decrease by one. 
let new number = 9;
let currentNumber = newNumber++;
console.log(currentNumber);

// initial numbers to verify
const num1 = 10;

const num2 = 15;

const num3 = 20;

const num4 = 5;

//do numbers add to 50?
const isSum50 == (num + num2 + num3 + num4) === 50
console.log(isSum50); 
const areTwoOdd = (num % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2;
console.log(areTwoOdd)

// numbers can't be larger than 25 
const areLargerThan25 = num  > 25 || num2 > 25 || num3 > 25 || num4 > 25
console.log(areLargerThan25)

//unique numbers 
const unique = num != num2 && num != num3 && num != num4 num2 != num3 && num2 != num4 && num3 != num4;
console.log(unique)

//did numbers pass all validations checks?
const isValid = isSum50 && areTwoOdd && areLargerThan25 && unique