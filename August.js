// Bubble Search Implementation

const bubbleSearch = (arr) => {
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
};

console.log(bubbleSearch([8, 1, 2, 3, 4]));

//Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
};

//Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return nums[middle] > target ? middle : middle + 1;
};

//Selection Sort Implementation

const selectionSort = (arr) => {
    for (let i = 0; i > arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
};

console.log(selectionSort([8, 1, 2, 3, 4]));

//Insertion Sort Implementation

const insertionSort = (arr) => {
    let currentVal;
    for (var i = 1; i < arr.length; i++) {
        console.log("i", i);
        currentVal = arr[i];
        console.log("current val", currentVal);
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log("j", j);
            arr[j + 1] = arr[j];
            console.log(arr[j + 1]);
        }
        arr[j + 1] = currentVal;
    }
    return arr;
};

console.log(insertionSort([4, 2, 9, 76, 5]));

//Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

const solution = (s) => {
    let res = [];
    for (let i = s.length - 1; i >= 0; i--) {
        res.push(s[i]);
    }
    return res.join("");
};

const solution2 = (s) => [...s].reverse().join("");

//Persistent Bugger

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

const persistence = (num) => {
    let counter = 0;
    while (num.toString().length !== 1) {
        num = num
            .toString()
            .split("")
            .reduce((a, b) => a * b);
        counter++;
    }
    return counter;
};

//Abbreviate a Two Word Name

//  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

const abbrevName = (name) => {
    let res = new Array(name[0]);
    for (let i = 0; i < name.length; i++) {
        if (name[i] === " ") {
            res.push(name[i + 1]);
        }
    }
    return res.map((ch) => ch.toUpperCase()).join(".");
};

console.log(abbrevName("Sam Harris"));

//Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

const getSum = (a, b) => {
    let sum = 0;
    if (a === b) {
        return a;
    } else {
        let max = Math.max(a, b);
        let min = Math.min(a, b);
        while (min <= max) {
            sum += min++;
        }
    }
    return sum;
};

//Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

const bmi = (weight, height) => {
    let bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25) {
        return "Normal";
    } else if (bmi <= 30) {
        return "Overweight";
    } else return "Obese";
};

const bmi2 = (weight, height) => {
    let bmi = weight / (height * height);

    return bmi < 18.5
        ? "Underweight"
        : bmi <= 25
        ? "Normal"
        : bmi <= 30
        ? "Overweight"
        : "Obese";
};

//Shortest Word

//Simple, given a string of words,
// return the length of the shortest word(s).

// String will never be empty and
// you do not need to account for different data types.

const findShort = (s) => {
    let arr = s.split(" ");
    let smallest = arr[0].length;
    for (let i = 1; i < arr.length - 1; i++) {
        if (smallest > arr[i].length) {
            smallest = arr[i].length;
        }
    }
    return smallest;
};

//nonrepeatedCharacter

// Given an arbitrary input string, return the first nonrepeated character in
// the string. For example:

//    firstNonRepeatedCharacter('ABA'); // => 'B'
//    firstNonRepeatedCharacter('AACBDB'); // => 'C'

const firstNonRepeatedCharacter = (str) => {
    let chars = {};
    let c;
    for (let i = 0; i < str.length; i++) {
        c = str[i];
        if (!chars[c]) chars[c] = 1;
        else chars[c]++;
    }
    console.log(chars);
    for (let j = 0; j < str.length; j++) {
        c = str[j];
        if (chars[c] === 1) return c;
    }
    return null;
};

console.log(firstNonRepeatedCharacter("ABA"));

//Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b) => {
    return a.filter((el) => !b.includes(el));
};

//Factorial

//Write a function factorial which accepts a number
//and returns the factorial of that number.
//A factorial is the product of an integer and all the integers below it;
//e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
//factorial zero (0!) is always 1.

function factorial(num) {
    if (num < 0) return 0;
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

//Power Challenge

// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents

function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

//ProductOfArray Challenge

//Write a function called productOfArray
//which takes in an array of numbers and returns the product of them all.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (arr) => {
    let result = 1;
    function helperMethod(input) {
        if (input.length === 0) return;
        else {
            result = result * input[0];
            console.log(result);
            helperMethod(input.slice(1));
        }
    }

    helperMethod(arr);
    return result;
};

console.log(productOfArray([1, 2, 3]));

//Recursive Range

//Write a function called recursiveRange which accepts a number
//and adds up all the numbers from 0 to the number passed to the function
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}
