//Doubly Linked List Challenge

//Implement doubly linked list  and push method

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    ///Implement pop method
    pop() {
        if (!this.head) return undefined;
        let oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
    //Implement shift method
    shift() {
        if (!this.head) return undefined;

        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}

list = new DoublyLinkedList();
list.push(11);
list.push(17);
list.push(19);
console.log(list);


//Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

const isSubsequence = (str1, str2) => {
    if (str1.length === 0 && str2.length === 0)
      return true;
   let count = 0;
     for (let char of str2){
       if (str1[count] === char){
         count ++;
       }
       if (str1.length === count){
         return true;}
     }
     return false;
   };

//Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

   var isIsomorphic = function(s, t) {
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
         if (obj1[s[i]] !== obj2[t[i]])
             return false;
        else {
            obj1[s[i]] = i;
            obj2[t[i]] = i;
        }
    }
    return true;
    
};


 