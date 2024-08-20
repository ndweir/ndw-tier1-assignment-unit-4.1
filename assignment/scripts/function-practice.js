console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Nick'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber
}
console.log(addNumbers(1,2))

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3
}
console.log(multiplyThree(1,2,3))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

console.log(isPositive(1));
console.log(isPositive(-1));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if(!array.length) {
    return undefined
  }
  else {
    return array[array.length - 1]
  }
}

console.log(getLast([1, 2, 3]));
console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for(const val of array) {
    if(val === value) {
      return true;
    }
  }
  return false;
}

console.log(find(5, [1,2,3,4,5]))
console.log(find(5,[]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

// console.log('FIRST LETTER')
function isFirstLetter(letter, string) {
  for(let i = 0; i < 1; i++){
    if(string[i] === letter) return true;
  }
  return false
}

console.log(isFirstLetter('k', 'string'))
console.log(isFirstLetter('j', 'job'));
// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  for(const num of array) {
    sum += num;
  }

  return sum;
  // TODO: return the sum
}


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('====All Pos====')
function allPositive(arr) {
  let positiveNums = [];

  for(const num of arr){
    if(num > 0) {
      positiveNums.push(num);
    }
  }
  return positiveNums;
}

console.log(allPositive([]));
console.log(allPositive([1, 0, 3, -6, 10]));
console.log(allPositive([-4, -5, -6]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// my selected problem from codeWars
//Create a function that takes a number as an argument 
// and returns a grade based on that number.
console.log('***GRADER***')
const grader = function(score) {
  if(score > 1) return "F"
    else if(score > 0.9) return "A";
    else if (score > 0.8) return "B";
    else if (score > 0.7) return "C"
    else if (score > 0.6) return "D"
  else return "F"
}

console.log(grader(2));
console.log(grader(0.91));
console.log(grader(0.82));
console.log(grader(0.76));
console.log(grader(0.65));
console.log(grader(0.2));


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
