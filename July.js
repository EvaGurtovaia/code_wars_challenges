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

//Begginer - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

const maps = (x) => {
    let result = [];
    for (let i = 0; i < x.length; i++) {
        result.push(x[i] * 2);
    }
    return result;
};

const maps2 = (x) => {
    return x.map((n) => n * 2);
};

//Keep Hydrated!

//Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

const litres = (time) => {
    return Math.floor(time * 0.5);
};

//Are They The "Same"?

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

const comp = (array1, array2) => {
    if (!array1 || !array2 || array1.length !== array2.length) return false;
    return (
        array1
            .map((num) => num * num)
            .sort()
            .toString() === array2.sort().toString()
    );
};

//Return Negative

// In this simple assignment you are given a number and have to make it negative.
//But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

const makeNegative = (num) => {
    let result;
    if (num <= 0) return num;
    else result = num * -1;
    return result;
};

const makeNegative2 = (num) => {
    return num < 0 ? num : -num;
};
