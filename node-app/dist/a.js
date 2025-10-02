"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
console.log(x);
function greet(a) {
    console.log(`"Hello" , ${a}`);
}
greet("mohit");
function sum(a, b) {
    return a + b;
}
let val = sum(4, 5);
console.log(val);
function first(second = () => {
    console.log("hello");
}) {
    setTimeout(() => {
        second();
    }, 3000);
}
first();
function runafter1sec(fn) {
    setTimeout(() => {
        fn();
    }, 3000);
}
function fn() {
    console.log("Hello");
}
runafter1sec(fn);
function isLegal(user) {
    if (user.age > 18) {
        console.log("Eligible");
        return true;
    }
    else {
        console.log("Not Eligible");
        return false;
    }
}
isLegal({
    name: "Mohit",
    age: 20,
});
function greeting(user) {
    console.log("hello" + user.name);
}
greeting({ name: "Mohit", age: 20 });
class Employee {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("harkirat", 22);
e.greet("Hello Sir");
console.log("latest");
function isprint(id) {
    console.log(id);
}
isprint("1");
isprint(1);
const teamlead = {
    name: "mohit",
    age: 23,
    department: "IT",
};
function printteamlead(teamlead) {
    console.log(teamlead.name, teamlead.department);
}
printteamlead(teamlead);
function maxValue(arr) {
    if (arr.length == 0) {
        console.log("array is empty");
        return;
    }
    let max = arr[0];
    for (let a of arr) {
        if (max && a > max) {
            max = arr[a];
        }
    }
    console.log("maximum value is: ", max);
}
maxValue([1, 2, 3]);
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
function doSomething(keypressed) {
}
doSomething(Direction.up);
doSomething(Direction.down);
function identity(val) {
    return val;
}
let output1 = identity("mohit");
let output2 = identity(22);
console.log(output1, " ", output2);
function identitygeneric(val) {
    return val;
}
let output3 = identitygeneric("muskan");
let output4 = identitygeneric(17);
console.log(output3, " ", output4);
function getfirstelemment(arr) {
    return arr[0];
}
const el = getfirstelemment(["mohit", "muskan"]);
const el2 = getfirstelemment([1, 2]);
const express_1 = __importDefault(require("express"));
module.exports = {
    a: 1
};
//# sourceMappingURL=a.js.map