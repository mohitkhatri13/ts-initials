let x: number = 1;

console.log(x);

// function in typescript

function greet(a: string) {
  console.log(`"Hello" , ${a}`);
}
greet("mohit");

// type inference
// a is num b is num then ts known that is auto return number
// means we can write or not type of fucntion nut it is good practice that we should write it

function sum(a: number, b: number): number {
  return a + b;
}
let val = sum(4, 5);
console.log(val);

// types = string , number , bool , any

// create a function that take one function as a input and run after 1 sec
function first(
  second: () => void = () => {
    console.log("hello");
  }
) {
  setTimeout(() => {
    second();
  }, 3000);
}
first();

// thing to learn how to give type of function
// ()=>  if it is accepting arguments as a function than write inn braces and void is the return type

// or
function runafter1sec(fn: () => void) {
  setTimeout(() => {
    fn();
  }, 3000);
}
function fn() {
  console.log("Hello");
}
runafter1sec(fn);



// how to define type of objects in ts
// ans - we have to create interfaces
interface User {
  name: string;
  age: number;
  email?: string; // optional arguments
}
function isLegal(user: User) {
  if (user.age > 18) {
    console.log("Eligible")
    return true;
  } else {
    console.log("Not Eligible")
    return false;
  }
}
isLegal({
  name: "Mohit",
  age: 20,
});

function greeting(user: User) {
  console.log("hello" + user.name);
}
greeting({ name: "Mohit", age: 20 });




// not used much in the industy but ans of the question what is the differecnce between interfaces and types
// type is used to define the union types and interfaces is used to define the object types
// if we define an interface than the same it can be used to implements classes but types can not be used to define classes

interface person{
    name:string,
    age:number,
    greet(phrase:string): void
}
class Employee implements person{
    name:string;
    age:number;

    constructor(n:string , a:number){
        this.name = n;
        this.age = a;
    }
    greet(phrase :string){
        console.log(`${phrase} ${this.name}`)
    }
}

const e = new Employee("harkirat" , 22);
e.greet("Hello Sir")
console.log("latest")