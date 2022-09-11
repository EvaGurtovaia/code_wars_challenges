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
    //Implement unshift method
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //Implement get method
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let count, current;
        if (idx <= this.length / 2) {
            console.log("front");
            count = 0;
            current = this.head;
            while (count !== idx) {
                current = current.next;
                count++;
            }
        } else {
            console.log("back");
            count = this.length - 1;
            current = this.tail;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    //Implement set method
    set(idx, val) {
        let curNode = this.get(idx);
        if (curNode != null) {
            curNode.val = val;
            return true;
        }
        return false;
    }
    //Implement insert method
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(idx - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    //Implement remove method
    remove(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let removedNode = this.get(idx);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
    //Implement reverse method
    reverse() {
        if (!this.head) return undefined;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.prev = next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
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
    if (str1.length === 0 && str2.length === 0) return true;
    let count = 0;
    for (let char of str2) {
        if (str1[count] === char) {
            count++;
        }
        if (str1.length === count) {
            return true;
        }
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

var isIsomorphic = function (s, t) {
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
        if (obj1[s[i]] !== obj2[t[i]]) return false;
        else {
            obj1[s[i]] = i;
            obj2[t[i]] = i;
        }
    }
    return true;
};

//Implement Stack and Push Method

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let current = this.first;
            this.first = newNode;
            this.first.next = current;
        }
        return ++this.length;
    }
    //Implement pop method
    pop() {
        let deletedNode = this.first;
        if (!this.first) return null;
        if (this.length === 1) {
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return deletedNode.value;
    }
}
let stack = new Stack();
console.log(stack.push(3));
console.log(stack.push("bebe"));
console.log(stack.push("lalala"));

console.log(stack);
