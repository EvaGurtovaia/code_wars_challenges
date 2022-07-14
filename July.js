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

//Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'


let findMissingLetter = arr => {  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (arr[0] === arr[0].toUpperCase()){
      alphabet = alphabet.toUpperCase();
      console.log(alphabet)
    }
    const startingPosition = alphabet.indexOf(arr[0]);
  
    for (let i = startingPosition; i < startingPosition + arr.length; i++){
    if (alphabet[i] !== arr[i - startingPosition]){
      return alphabet[i];
    }; 
  }
  }