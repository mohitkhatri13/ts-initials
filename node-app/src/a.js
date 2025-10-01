var x = 1;
console.log(x);
// function in typescript
function greet(a) {
    console.log("\"Hello\" , ".concat(a));
}
greet("mohit");
// type inference
// a is num b is num then ts known that is auto return number
// means we can write or not type of fucntion nut it is good practice that we should write it
function sum(a, b) {
    return a + b;
}
var val = sum(4, 5);
console.log(val);
// types = string , number , bool , any
// create a function that take one function as a input and run after 1 sec
function first(second) {
    if (second === void 0) { second = function () {
        console.log("hello");
    }; }
    setTimeout(function () {
        second();
    }, 3000);
}
first();
// thing to learn how to give type of function
// ()=>  if it is accepting arguments as a function than write inn braces and void is the return type
// or
function runafter1sec(fn) {
    setTimeout(function () {
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
var Employee = /** @class */ (function () {
    function Employee(n, a) {
        this.name = n;
        this.age = a;
    }
    Employee.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    };
    return Employee;
}());
var e = new Employee("harkirat", 22);
e.greet("Hello Sir");
console.log("latest");
