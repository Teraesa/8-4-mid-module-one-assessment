/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
//1. create a variable to store total count of animals
//2. loop through the array of objects to get the key count and value to add up
//3. push total count of animals into the variable created
//4. return/console.log the totalcount
function getTotalCount(animals) {
  let animalTotal = 0;
  for (let animal of animals) {
    animalTotal += animal.count;
  }

  return animalTotal;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
//return the type of animal => the key kind
//return kind in an array of strings
//the length of the array "kind" shoudld ===  the length of the inputted array in the function
function getAllKinds(animals) {
  let arrayOfAnimals = [];
  for (let animal of animals) {
    arrayOfAnimals.push(animal.kind);
  }
  return arrayOfAnimals;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
//return an array of objects => where the number of animals "count" is greater than or equal too the minimum value inputted =? smallest number/animal count in the array of objects
//if the count of animlas is higher that the minimum count of animals then array could be an empyu array and should return this
//1. declare a varible to hold min count
function filterByCountMinimum(animals, minimum) {
  let value = []; //>= miniumum value inputted
  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    if (animal.count >= minimum) {
      value.push(animal);
    }
  }
  return value;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
//return a single object = has the hight count/or the animals that's their the most compared to all other counts of animals
//if there are multiple animals with the same count then return the animals that appears first
//1. create variable to store the highest count
//2. loopp through to find the highest count
//3. create conditional after looping to find highest count
function getMostCommonAnimal(animals) {
  if (animals.length === 0) {
    return null;
  }
  //return highest count
  let biggestCount = {};
  let mostFrequentCount = {};
  let number = 0;

  for (let i = 0; i < animals.length; i++) {
    //console.log("hfioefoeiwfhgoehgfoefh", animals);
    if (animals[i].count > 1) {
      return (mostFrequentCount = animals[i]);
    }
    // if (animals[i].count > number) {
    //   return (biggestCount = animals[i]);
    // }
  }

  //return most refrequent animal that appears firs if its more than one with came count
  return biggestCount;
}

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
