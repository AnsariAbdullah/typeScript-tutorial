"use strict";
// Basic types
let id = 5;
let company = 'Abdullah Ansari';
let isPublic = true;
let x = 'any type can be stored';
let age;
age = 30;
let ids = [1, 2, 3, 4];
ids.push(2);
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'Hamid', true];
// Tuple array
let employee;
employee = [
    [1, 'John'],
    [2, 'Jake'],
    [3, 'Gill'],
];
// Union
let pid = 3;
let pid2 = '3';
// Enum
var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 1] = "Up";
    Directions1[Directions1["Down"] = 2] = "Down";
    Directions1[Directions1["Right"] = 3] = "Right";
    Directions1[Directions1["Left"] = 4] = "Left";
})(Directions1 || (Directions1 = {}));
console.log(Directions1.Up);
var Directions2;
(function (Directions2) {
    Directions2["Up"] = "Up";
    Directions2["Down"] = "Down";
    Directions2["Right"] = "Right";
    Directions2["Left"] = "Left";
})(Directions2 || (Directions2 = {}));
console.log(Directions2.Up);
const user = {
    id: 1,
    name: 'John'
};
// Type assertion
let cid = 1;
// let customerID = <number>cid
let customerID = cid;
// Functions
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(3, 4));
// Void (when you don't return anything)
function consoleMessage(message) {
    console.log(message);
}
consoleMessage('i am message');
const user1 = {
    id: 1,
    name: 'John'
};
// interface Point = number | string --- this will give error
const point = 2;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        // console.log(123)
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
let brad = new Person(1, 'Brady Brad');
let john = new Person(2, 'John Pinto');
// console.log(john.register())
// console.log(brad, john);
