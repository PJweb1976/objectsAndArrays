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
const paintingWall = function (paint) {
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