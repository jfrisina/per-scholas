// 308.3 Warm up

// Switch Statement

let weather = `rain`;
switch (weather) {
    case `sun`: message = `Put on sunscreen!`;
    break;
    case `rain`: message = `Put on your rain jacket!`;
    break;
    case `snow`: message = `Put on your coat, it's gonna be a cold one!`;
    break;
    case `wind`: message = `Put on your windbreaker!`;
    break;
}
console.log(message);


// if else Statement - Magic 8 Ball
const randNum = Math.floor(Math.random()*101);
if (randNum >= 0 && randNum <= 10) {
    message = `Try again`;
} else if (randNum >= 11 && randNum <= 20) {
    message = `Ask again later`;
} else if (randNum >= 21 && randNum <= 30) {
    message = `You are correct`;
} else if (randNum >= 31 && randNum <= 40) {
    message = `You deserve a lil treat`;
} else {
    message = `Look within yourself for the answer. Trust your intuition`;
}
console.log(`You entered ${randNum}. ${message}.`);