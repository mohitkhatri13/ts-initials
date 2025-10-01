"use strict";
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
//# sourceMappingURL=a.js.map