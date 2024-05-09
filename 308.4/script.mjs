let movies = [`Repo! The Genetic Opera`, `What a Girl Wants`, `Star Wars: The Empire Strikes Back`, `She's the Man`, `Dune`, `Dune 2`];

console.log(`Here is the whole array:\n${movies}`);

console.log(`Here is the second movie in the list:\n${movies[2]}`);

console.log(`How many movies are in my list?\n ${movies.length}`);

// can use arrays in for loops
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

// add items to your array by using var.length
movies[movies.length] = `The Sandman`;
console.log(movies);

// inserts item into the nth position, leaving blank spots where there is no entry. Called a sparse array when there are missing entries like this. 
movies[12] = `Shrek`;
console.log (movies);

// joining two arrays
let moreMovies = [`The Idea of You`, `Mother of the Bride`, `Abigail`];

let completeMovieList = movies.concat(moreMovies);
console.log(completeMovieList);

// making copies with arrays
let ultimateMovieList = movies.concat;
console.log(ultimateMovieList);
console.log(movies)

// join method
console.log(completeMovieList.join()); // will automatically use commas if no "delimiter" is used
console.log(completeMovieList.join(" ")); // will add spaces
console.log(completeMovieList.join(` and `)); // will separate the movies by " and "

// push method - adds values to the end of an array

completeMovieList.push(`Another Movie Title`);
console.log(completeMovieList);

completeMovieList.push(`Omg Another One`, `DJ KHALED`, `I Can't Think Of Any More`);
console.log(completeMovieList);

// pop method - removes values from the end of an array
// can only remove one at a time
completeMovieList.pop();
console.log(completeMovieList);

completeMovieList.pop();
completeMovieList.pop();
completeMovieList.pop();
completeMovieList.pop();
console.log(completeMovieList);

// unshift method - adds elements to the beginning of an array
completeMovieList.unshift(`The Other Guys`);
console.log(completeMovieList);
// can add multiples at once
completeMovieList.unshift(`Some Movie`, `One More Movie`)
console.log(completeMovieList);

//shift method - removes elements from the beginning of an array
// can only remove one at a time
completeMovieList.shift();
console.log(completeMovieList);

// splice method - can add or remove x amount of elements at a specified point (use the index) of the array 
// adding using splice
let deletedElements = completeMovieList.splice(2, 3)
console.log(completeMovieList);
console.log(deletedElements)

// deleting using splice
let addedElements = completeMovieList.splice(2, 0, `The Sting`)
console.log(addedElements);
console.log(completeMovieList);

// slice method - will create a new array from a slice of the old array. returns everything between the two provided indexes. old array stays the same. 
let newArray = completeMovieList.slice(1, 3);
console.log(newArray);

// at method - allows you to access the value at nth index
// can access items from the end of the array 
const singleMovie = completeMovieList.at(3);
console.log(singleMovie);

const endMovie = completeMovieList.at(-3);
console.log(endMovie);

// can do the same thing using this: 
console.log(completeMovieList[completeMovieList.length - 3]);

// reverse method - displays the array backwards
console.log(completeMovieList.reverse());


// flat method - flattens nested arrays
let numArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(numArray.flat());

// example with a 2 dimensional array
let numArray2 = [
	[1, 2, 3],
	[4, 5, 6],
	[
		[7, 8, 9],
		[10, 11, 12],
		[13, 14, 15]
	],
];
console.log(numArray2.flat(2))

// sort method - alphabetically sorts an array in place. that means is does not make a copy of the array and then sort it
// can use a callback function
console.log(completeMovieList.sort())

// index of method
// if you have multiples of the same value in an array, this will only find the first one
console.log(completeMovieList.indexOf(`Shrek`));


// last index of method
console.log(completeMovieList.lastIndexOf(`Shrek`));

// for each method
// iterates through an entire array
// this one also accepts a callback function

completeMovieList.forEach(function(movie) {console.log(movie)}) //"movie" is a placeholder, and you can use any


completeMovieList.forEach(function (placeholder, i) {
    placeholder = placeholder + " is a mid movie"
    console.log(placeholder + ` at index ${i}`);
})

// spread operator - creates a new array with copied
let newArr = [...completeMovieList];
console.log(newArr);
console.log(completeMovieList)

// can also add items to beginning or end, but not the middle
console.log(newArr = [...completeMovieList]);

// JavaScript Objects
// objects are a keyed collectio of zero or more properties. 
// a property has a key:value pair. 
// The key is a string, and must be unique
// The value is any JS code or other objects
// a property consists of a key:value pair
// a collection of key value pairs is called a dictionary
// objects use curly braces
// dont use bracket notation for objects - use dot notation!
const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989
}
console.log(vehicle.color)

// change an existing property
vehicle.color = `pink`
console.log(vehicle.color)
console.log(vehicle);

// delete an existing property
delete vehicle['hp'];
console.log(vehicle)

let hamster = {
    name: 'Shorty the Third',
    age: 1.5,
    favorites: `corn, broccoli, sunflower seeds`,
    speaksFrench: false,
    solveRubik: false
}
console.log(hamster.name);

if (hamster.age) {
    console.log(`ok`);
}

if (hamster.breed) {
    console.log(`ok`)
} else {
    console.log("that property hasn't been added")
}