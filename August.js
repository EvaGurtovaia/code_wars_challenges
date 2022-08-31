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

const factorial2 = (n) => (n > 1 ? n * factorial(n - 1) : 1);

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

//Fibonacci Challenge
//Write a recursive function called fib which accepts a number
//and returns the nth number in the Fibonacci sequence.
//Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(index) {
    if (index <= 2) return 1;
    return fib(index - 2) + fib(index - 1);
}

// Reverse

// Write a recursive function called reverse which accepts a string
// and returns a new string in reverse.

function reverseString(str) {
    if (str === "") return "";
    else return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));

//Merge Sort Challenge

//Implement merge sort

function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([1, 10, 3, 4, 2, 6]));

//Convert a Number to a String

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
    return num.toString();
}

//A Needle in the Haystack

// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle"

function findNeedle(haystack) {
    let index;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            index = i;
        }
    }
    return `found the needle at position ${index}`;
}

function findNeedle2(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

//Implement Quick Sort Algorithm

function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIdx - 1);
        // right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

console.log(quickSort([4, 6, -3, 9, 1, 2, 5, 17]));

//Singly Linked List Challenge

//Implement singly linked list  and push method

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    ///Implement pop method
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }
        return current;
    }
    ///Implement shift method
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }
    ///Implement unshift method
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    ///Implement get method
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count !== idx) {
            current = current.next;
            count++;
        }
        return current;
    }
    ///Implement set method
    set(idx, value) {
        let foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }
    ///Implement insert method
    insert(idx, value) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) return !!this.push(value);
        if (idx === 0) return !!this.unshift(value);
        let newNode = new Node(value);
        let prev = this.get(idx - 1);
        let temprHold = prev.next;
        prev.next = newNode;
        newNode.next = temprHold;
        this.length++;
        return true;
    }
    // Implement remove method
    remove(idx) {
        if (idx < 0 || idx > this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();
        let prevNode = this.get(idx - 1);
        let removedNode = prevNode.next;
        //prevNode = prevNode.next.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }
    //Implement reverse method
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("You");

console.log(list);

list.pop();
list.pop();
console.log(list);
list.pop();
console.log(list);

//Sqrt(x) challenge

//Given a non-negative integer x, compute and return the square root of x.
//Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

//Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
//Example 1:

//Input: x = 4
//Output: 2
//Example 2:

//Input: x = 8
//Output: 2
//Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

//Constraints:
//0 <= x <= 231 - 1

let mySqrt = function (x) {
    if (x <= 1) {
        return x;
    }
    for (let i = 2; i <= x; i++) {
        if (i * i === x) {
            return i;
        }
        if (i * i > x) {
            return i - 1;
        }
    }
};

//Assign Cookies

// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with;
// and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

// Example 1:

// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.
// Example 2:

// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
// You have 3 cookies and their sizes are big enough to gratify all of the children,
// You need to output 2.

let findContentChildren = function (g, s) {
    let contentChildren = 0;
    let sortedG = g.sort(function (a, b) {
        return a - b;
    });
    let sortedS = s.sort(function (a, b) {
        return a - b;
    });

    for (let i = sortedG.length - 1; i >= 0; i--) {
        if (sortedG[i] <= sortedS[sortedS.length - 1]) {
            contentChildren++;
            sortedS.pop();
        }
    }
    return contentChildren;
};

//Number of Segments in a String

// Given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non-space characters.

//  Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1

let countSegments = function (s) {
    return s.split(" ").filter((item) => item.length > 0).length;
};

//Richest Customer Wealth

// You are given an m x n integer grid accounts
//where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts.
//The richest customer is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

var maximumWealth = function (accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let temp = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            temp += accounts[i][j];
        }
        if (temp > max) {
            max = temp;
        }
    }

    return max;
};

//Merge Two Sorted Lists
//You are given the heads of two sorted linked lists list1 and list2.
//Merge the two lists in a one sorted list.
//The list should be made by splicing together the nodes of the first two lists.
//Return the head of the merged linked list.
//Example:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
