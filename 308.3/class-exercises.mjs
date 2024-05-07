// General template for loops:

// for (initialization; condition; afterthought) {
//     code to run
// }

// We have access to our initialization statement
// Initialization statement is a variable set to 0 or whatever we want to set it to.
// Condition statement says I want to run code block until i = 10. 10 times. 
// "i = i + 1" is the same as "i++". i++ is the shortcut notation :)

console.log("Count up from 1 to 10");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("Count down from 10 to 1");

for (let i = 10; i > 0; i--) {
    console.log(i)
}

console.log("Output odd numbers from 1 to 10");
// "i = i + 2" is the same as "i += 2". Resaves i as the new number, rather than just i + 2. 

for (let i = 1; i < 10; i += 2){
    console.log(i);
}

console.log(`Output even numbers from 1 to 10`);
for (let i = 2; i < 10; i += 2) {
    console.log(i);
}

console.log(`Output multiples of 3, starting at 6 and ending at 60`);
for (let i = 6; i <= 60; i += 3) {
    console.log(i);
}

console.log(`Output an increasing number of # symbols, from 1 to 7`);
// cannot put the variable in the code  block because everytime it reiterates, it will reset the whole thing. If it exists outside of the loop, then it can continually be updated

let hash = '#';
for (let i = 1; i < 8; i++) {
    console.log(hash += "#");
}

console.log("write a loop that iterates from 1 to 20. Print prime for all prime numbers, even for all even numbers, odd for all odd numbers. Treat 2 as an even number, and 1 and 3 as odd, rather than prime");

// 2, 3, 5, 7, 11, 13, 17, 19, and so on, are prime numbers because they cannot be divided evenly by any other number except 1 and themselves.

// 4, 6, 8, 9, 10, and so on, are not prime numbers because they can be divided evenly by numbers other than 1 and themselves. For instance, 4 can be divided by 2 evenly, and 6 can be divided by both 2 and 3 evenly.

for (let i = 1; i < 20; i++) {
    if ( i % i  == i | i % 1 == i ) {
        console.log(`${i} is a prime number`);
    } else if (i % 2 == 0) {
        console.log(`${i} is an even number`);
    } else if (i % 3 == 0) {
        console.log(`${i} is an odd number`);
    } else {
        console.log("prime")
    }
}


console.log("Dylan's answer for the output prime, even, and odd numbers")

for (let i = 1; i <= 20; i++) {
    if (i === 1) {
      console.log(`${i} is odd`);
    } else if (i % 2 == 0) {
      console.log(`${i} is even`);
    } else if (i % 2 !== 0 && i % 3 !== 0) { 
      console.log(`${i} is prime`);
    } else {
     console.log(`${i} is odd`); 
    }
  }

  // LOOPING THROUGH A STRING -----------------------------------
  console.log("looping through a string");
  const str = "hi";
  console.log("string length: " + str.length);

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }

// FOR IN LOOPS -----------------------------------
console.log("FOR IN LOOPS--------------------------")

const word = "hello world";
// i is just a placeholder for index
// use when looking for the index of a word
for (const i in word) {
    console.log(`${word[i]} is the ${i}th character in the word`)
}


// FOR OF LOOPS -----------------------------------
const word2 = "hello world";
// i is not representing the index but the actual value of the character itself
// use when you want the index AND the element of something
for (const e of word2) {
    console.log(e);
}

// CONTINUE KEYWORD ----------------------------------------
// makes it easy to skip stuff. 
// So in the following example, we are going to skip all the L's in the string

console.log("learning how to use continue")
const word3 = "hello world";
for (let i = 0; i < word3.length; i++) {
    if (word3[i] == "l") {
        continue;
    }
    console.log(word3[i])
}

// a different way to do it
for (const c of word3) {
    if (c == "l") {
        continue;
    }
    console.log(c);
}

// WHILE LOOP ---------------------------------
console.log("While loop --------------------------------");
// the loop breaks once the while condition is no longer satisfied
// might want to use a while loop if your for loop is too crazy to read

let x = 30;
while (x > 0) {
    x /= 2; // "x = x / 2" Will divide it by 2 and then store the new number as x.  updates x's value to the new number you get after dividing by 2.
    x --;
    if (x % 1 != 0) {
        break;
    }
    console.log(x);
}

// Count down to 0 from a given number.
console.log("Count down to 0 from a given number.")
let number = 20;
while (number >= 0) {
    console.log(number);
    number --
}

// Log integers in multiples of 3 as long as they are less than 35.
console.log("Log integers in multiples of 3 as long as they are less than 35.")
let integer = 3;
while (integer < 35) {
    console.log(integer);
    integer += 3;
}
    

// Print integers in multiples of 5 as long as they are less than 100.
console.log("Log integers in multiples of 3 as long as they are less than 35.")
let integer2 = 5;
while (integer2 < 35) {
    console.log(integer2);
    integer2 += 5;
    if (integer2 >= 100) {
        break;
    }
}

// Print integers between 0 and 20 with the following conditions:
// - All numbers divisible by 2 should be multiplied by 3 before they are output.
// - All other integers should not be output.
// - Print all prime numbers between 0 and 20.

let num = 0;
while (num <= 20) {
    if (num % 2 == 0) {
        console.log(num * 3);
    } else if ( num % 2 != 0 && num % 3 !== 0 ) {
        console.log(`${num} is a prime number`);
    }
    num++
}

// bonus problem - how many quarters did romeo receive?
console.log("change exercise-----------------")
let cookie = 4;
let cash = 10;
let quarters = 0;
let change = cash - cookie;

while (change != 0) {
    change -= .25;
    quarters ++
}
console.log(quarters);

// DO WHILE LOOP ----------------------------------------------
// do will run once and then satisfy the condition
// not used often 

console.log("do while loop --------------------------------")

// nested for loops are CPU-intensive
