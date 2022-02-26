var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic types
var id = 5;
var company = 'Abdullah Ansari';
var isPublic = true;
var x = 'any type can be stored';
var age;
age = 30;
var ids = [1, 2, 3, 4];
ids.push(2);
var arr = [1, true, 'hello'];
// Tuple
var person = [1, 'Hamid', true];
// Tuple array
var employee;
employee = [
    [1, 'John'],
    [2, 'Jake'],
    [3, 'Gill'],
];
// Union
var pid = 3;
var pid2 = '3';
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
var user = {
    id: 1,
    name: 'John'
};
// Type assertion
var cid = 1;
// let customerID = <number>cid
var customerID = cid;
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
var user1 = {
    id: 1,
    name: 'John'
};
// interface Point = number | string --- this will give error
var point = 2;
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        // console.log(123)
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, 'Brady Brad');
var john = new Person(2, 'John Pinto');
// console.log(john.register())
// console.log(brad, john);
// Extending Classes -> this is a subclass
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(5, 'Shawn', 'Developer');
console.log(emp);
// Generics
// creating a function that takes an array of any type and returns an array of any type
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['Brad', 'John', 'Jill']);
// since it take an array of any type it takes a string as well
numArray.push('Jack');
// since it take an array of any type it takes a number as well
strArray.push('Jack');
// To avoid such thing we can do this
function getArr(items) {
    return new Array().concat(items);
}
var nArray = getArr([1, 2, 3, 4]);
var sArray = getArr(['Brad', 'Jack', 'John', 'Jill']);
// nArray.push('Jack')		// This is not allowed now since it will take an array of type number only as defined while declaring
// sArray.push(1)					// This is not allowed now since it will take an array of type string only as defined while declaring
