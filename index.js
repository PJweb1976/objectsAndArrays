//part 1 objects

/*let person = {
    name: 'Peggy',
    age: 45,
    evaluations: [7, 10, 9],
};
//console.log (person);

//console.log (person.name);
//console.log (person.age);

//console.log (person.evaluations);
// value is array [3] {7, 10, 9}

//console.log (person["name"]);
//console.log (person["age"]);
//checked answer
*/

// part 2 arrays
/*
array = ["green", "blue", "red"],

console.log (array);

console.log (array.length);

console.log (array[0]);

console.log (array[array.length - 1]);
//checked answer

// not correct: console.log (array.push [yellow])

array.push("yellow");
console.log (array);

array.push(5);
console.log (array);

array.push( {greeting: "hi, I am an object"});
console.log (array);
console.log (array[array.length - 1]);
*/

//Part 3 a "real-life" object
/*
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {favourite_food: "fish",
    medium_liked_food: "dried fruits", 
    disliked_food: "walnuts"
    }},
    {name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {favourite_food: "tuna",
    medium_liked_food: "canned food", 
    disliked_food: "all fruits"
    }},
    {name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {favourite_food: "meaty things",
    medium_liked_food: "tuna", 
    disliked_food: "canned food"
    }}
    ]
    //example
    console.log("origin cat 1:", catBreeds[0].origin)
    //excersize
    console.log("name cat 3:", catBreeds[2].name);

    console.log("energy_level cat 1:", catBreeds[0].energy_level);

    console.log("temperament cat 2:", catBreeds[1].temperament[0]);

    console.log("temperament cat 3:", catBreeds[2].temperament[4]);

    console.log("favourite food cat 3:", catBreeds[2].favourite_food);
*/

////// Function arguments: lesson

 // passing an argument to a function
  /*const heat = function (item) {
      console.log("I'm heating " + item);
      // lot of code
      // lot of code
      // lot of code
      console.log("Ping! your " + item + " is heated")
  }

  const main_course = "pasta";
  const dessert = "cake";
  
  heat(main_course);
  heat(dessert);
*/
/*
const multiply = function (numberA, numberB) {
    console.log(numberA * numberB);

};
multiply(3,4);

const age = 5;
const dogYearsFactor = 7;
multiply(age, dogYearsFactor);
*/
/*
const calculateAverage = function (numbers) {
    // calculate average
    const average = numbers.reduce((total, n) => total + n) / numbers.length
    console.log(average);
};
    const grades = [6,7,8,9,5,6,7,8];
    calculateAverage(grades);

    const ages = [16, 22, 50, 100, 34];
    calculateAverage(ages);
*/
/*
if (typeof module !== 'undefined' && module.exports) {
	console.log('this script is running in Node.js');
} else {
	console.log('this script is not running in Node.js');
}
*/
//Exercise Function Arguments
//No arguments
/*const paintingWall = function (paint) {
    console.log("The wall is painted red");
}
paintingWall();

//Single argument
const paintingBedroomWall = function (color) {
    console.log("The wall is painted " + color);
}
paintingBedroomWall("green");
paintingBedroomWall("yellow");
// emty makes answer undefined
paintingBedroomWall();

//Multiple arguments
const paintingKitchenWall = function (whatWall , color) {
    console.log("The " + whatWall, "wall is painted " + color);
}
paintingKitchenWall("north", "blue");
paintingKitchenWall("south", "orange");
// Yes order of arguments matters
paintingKitchenWall("blue", "north");

// Answer text/codes:
//console.log(`The wall has been painted ${color}`); 
// String interpolation
//console.log(`The ${whichWall} wall has been painted ${color}`); 
// String interpolation
//console.log(`The ${whichWall} wall has been painted ${color}`); 
// String interpolation
//console.log(`The ${whichWall} wall has been painted ${color}`); 
// String interpolation
//The end
*/
/*
//Function basics: return statement
// 1 return value stops a function
// 2 goes back to were the function was called
// 3 returns a value
const add = function(number1, number2) {
    const sum = number1 + number2;
    return sum; // only inside function

};
const result = add(4,5);
console.log(result);

//
const doubleArray = function(numbers) {
    const doubled = numbers.map(n => n * 2);
    return doubled;
};
const result2 = doubleArray([1,2,3]);
console.log(result2);
//deze doet het niet. moet zijn Bees!!!
const scream = function(sentence) {
    console.log("${sentence}!!!");
    return sentence;
};
const result3 = scream("Bees");
console.log(result3);
*/


/*const numberIsBig = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};
console.log(numberIsBig(150));
console.log(numberIsBig(50));
console.log(numberIsBig(0));
console.log(numberIsBig(999));
 // function that produces something
*//*
 const numberIsBig = function(number) {
    return number > 100;
};
console.log(numberIsBig(150));
console.log(numberIsBig(50));
console.log(numberIsBig(0));
console.log(numberIsBig(999));
 // function that produces something
*/



/*
let maxPeople = 250,
currentPeople = 150,
agePerson = 16

maxPeopleMsg = "It's too busy now, come back later";
currentPeopleMsg = "come in";
agePersonMsg = "This is a club for adults";

//if (agePerson >=1 && agePerson <= 18) {
  //  agePersonMsg = "This is a club for adults";
//}
//if (currentPeople <=250)
//    currentPeopleMsg = "come in";

//if (maxPeople <= 251) {
 //   maxPeopleMsg = "It's too busy now, come back later";
//}
if (agePerson >=18 && currentPeople <=  250 && maxPeople <= 251);

console.log(agePersonMsg);
console.log(currentPeopleMsg);
console.log(maxPeopleMsg);
*/
/*
// bouncer at a club
const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) {
        return "this is a club for adults";
    }

    if (currentVisitors >= maxVisitors) {
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
};

console.log(getBouncerReaction(2000, 0, 15)); // "this is a club for adults"
console.log(getBouncerReaction(2000, 1999, 50)); // "come in"
console.log(getBouncerReaction(2000, 2000, 40)); // "it's too busy now, come back later"
console.log(getBouncerReaction(2000, 2999, 30)); // "it's too busy now, come back later"
*/
/*
// Alternative solution1
const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) return "this is a club for adults";
    if (currentVisitors >= maxVisitors)
        return "it's too busy now, come back later";
    return "come in";
};
console.log(getBouncerReaction(2000, 0, 15)); // "this is a club for adults"
console.log(getBouncerReaction(2000, 1999, 50)); // "come in"
console.log(getBouncerReaction(2000, 2000, 40)); // "it's too busy now, come back later"
console.log(getBouncerReaction(2000, 2999, 30)); // "it's too busy now, come back later"
*/

/*
// Alternative solution2
const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    let response;
    if (ageOfPotentialVisitor < 18) {
        response = "this is a club for adults";
    } else if (currentVisitors >= maxVisitors) {
        response = "it's too busy now, come back later";
    } else {
        response = "come in";
    }
    return response;
};
console.log(getBouncerReaction(2000, 0, 15)); // "this is a club for adults"
console.log(getBouncerReaction(2000, 1999, 50)); // "come in"
console.log(getBouncerReaction(2000, 2000, 40)); // "it's too busy now, come back later"
console.log(getBouncerReaction(2000, 2999, 30)); // "it's too busy now, come back later"
*/
/*
const calculateAverage = function(
    number1,
    number2,
    number3,
    number4,
    number5
){
const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(calculateAverage(1,1,1,1,1,));
console.log(calculateAverage(1,2,3,4,5,));
console.log(calculateAverage(-10000,0,0,0,5000));
*/
/*
const calculateAverage = function(
    number1,
    number2,
    number3,
    number4,
    number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    const averageRounded = Math.round(average);
    return averageRounded;
};
console.log(calculateAverage(1,1,1,1,1,));
console.log(calculateAverage(3,3,3,8,6,));
console.log(calculateAverage(-10000,0,0,0,5000));
*/
// Functions three ways to write them: lesson
// function declarations
// function expressions
// arrow functions
/*
// function declaration
function sayHello1() {
    console.log("Hello 1");
};
sayHello1()

// function expression
const sayHello2 = function() {
    console.log("Hello 2");
};
sayHello2()

// arrow function (also a function expression)
const sayHello3 = () => {
    console.log("Hello 3");
};
sayHello3()

// Best practices!!!
// always use function expressions(normal or arrow)
// don't mix function expressions and declarations
// use arrow functions for very short functions (in general it's a good idea to write short functions)
// use arrow functions when you're comfortable with them
*/
/*
//youtube movie
function calculateTip(meal_cost, drink_cost) {
    let tip_size = (meal_cost + drink_cost) * 0.15;
    console.log("The meal cost was: " + (meal_cost + drink_cost));
    console.log("The tip should be: " + tip_size);
    console.log("The total is: " + ((meal_cost + drink_cost) + tip_size));
    return tip_size;
}
//calculateTip(10.00, 5.00); (is voor return value)
let tip1 =calculateTip(10.00, 5.00);
let tip2 =calculateTip(20.00,0.00)

console.log("tip1: " + tip1);
console.log("tip2: " + tip2);
console.log("Total Tips: " + (tip1 + tip2));
*/
/*
let writeMoreStuff = function() {
    console.log("Writing more stuff");
};
writeMoreStuff();
console.log(typeof writeMoreStuff);

let writeMoreStuffAgain = function namedFunction() {
    console.log("Writing more stuff again from named");
}
writeMoreStuffAgain();
console.log(typeof writeMoreStuffAgain);
*/
/*
thisExistsNoMatterWhat();// maakt niet uit waar je hem neer zet

function thisExistsNoMatterWhat() {
console.log("This ran succesfully.");
}

writeMoreStuff(); // werkt wel als je hem eronder zet
let writeMoreStuff = function() {
    console.log("Writing more stuff");
};
*/
/*
let arrowFunction = () => {
    console.log("I'm an arrow function!");
};
arrowFunction();
*/


//Exercise: three ways to write functions


const doSquareCalculation = function(number1, number2) {
    const number1Squared = number1 * number1,
     number2Squared = number2 * number2,
     sum = number1Squared + number2Squared,
     sumSquared = sum * sum;
    console.log(sumSquared);
    return sumSquared;
};
doSquareCalculation(2,4);
doSquareCalculation(4,6);

const doSquareCalculation2 = (number1, number2) => {
    const number1Squared = number1 * number1,
     number2Squared = number2 * number2,
     sum = number1Squared + number2Squared,
     sumSquared = sum * sum;
    console.log(sumSquared);
    return sumSquared;
};
doSquareCalculation(2,4);
doSquareCalculation(4,6);

const square = number => number * number;

const doSquareCalculation3 = (number1, number2) =>
    square(square(number1) + square(number2));

    doSquareCalculation(2,4);
    doSquareCalculation(4,6);








