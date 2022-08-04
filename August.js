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

const solution2 = s => [...s].reverse().join('');
