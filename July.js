// Sum of Digits/Digital Root

//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
//The input will be a non-negative integer.

// 16  -->  1 + 6 = 7
//942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digital_root(n) {
    let sum = n;
    let arr = [];

    while (sum > 9) {
        arr = sum.toString().split("");
        sum = arr.reduce(
            (prevVal, curVal) => parseInt(prevVal) + parseInt(curVal)
        );
    }
    return sum;
}

//Summation
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//For example:

//summation(2) -> 3
//1 + 2

//summation(8) -> 36
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const summation = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
};

//Find The Missing Letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

let findMissingLetter = (arr) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (arr[0] === arr[0].toUpperCase()) {
        alphabet = alphabet.toUpperCase();
        console.log(alphabet);
    }
    const startingPosition = alphabet.indexOf(arr[0]);

    for (let i = startingPosition; i < startingPosition + arr.length; i++) {
        if (alphabet[i] !== arr[i - startingPosition]) {
            return alphabet[i];
        }
    }
};

// Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
    if (operation == "+") {
        return value1 + value2;
    }
    if (operation == "-") {
        return value1 - value2;
    }
    if (operation == "*") {
        return value1 * value2;
    }
    if (operation == "/") {
        return value1 / value2;
    }
}

//Count The Smiley Faces

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
    const result = arr.filter(
        (char) =>
            char === ":)" ||
            char === ";)" ||
            char === ":-)" ||
            char === ";-)" ||
            char === ":-D" ||
            char === ":~D" ||
            char === ":D" ||
            char === ";D" ||
            char === ";~D" ||
            char === ";-D" ||
            char === ":~)" ||
            char === ";~)"
    );
    return result.length;
}

//Square(n) sum

// Complete the square sum function so that
//it squares each number passed into it and then
//sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

const squareSum = (numbers) =>
    numbers.reduce((prevVal, curVal) => prevVal + Math.pow(curVal, 2), 0);

//Sum of odd numbers

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

const rowSumOddNumbers = (n) => {
    let firstDigit = n * n - (n - 1);
    let result = 0;
    let count = 0;
    while (count < n) {
        if (firstDigit % 2 !== 0) {
            result += firstDigit;
            count++;
        }
        firstDigit++;
    }
    return result;
};

const rowSumOddNumbersTwo = (n) => Math.pow(n, 3);

//Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"

const areYouPlayingBanjo = (name) => {
    let result;
    const letters = "r, R";
    if (letters.indexOf(name[0]) !== -1) {
        result = name + " plays banjo";
    } else {
        result = name + " does not play banjo";
    }
    return result;
};

const areYouPlayingBanjo2 = (name) => {
    return (
        name +
        (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
        " banjo"
    );
};

//Highest and Lowest

//Description
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first

const highAndLow = (numbers) => {
    let nums = numbers.split(" ");
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
};
