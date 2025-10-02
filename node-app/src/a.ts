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
    console.log("Eligible");
    return true;
  } else {
    console.log("Not Eligible");
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

interface person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
class Employee implements person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const e = new Employee("harkirat", 22);
e.greet("Hello Sir");
console.log("latest");

// Types In Typescript

// similar to interfaces, types let us aggregate data together

type user = {
  name: "string";
  age: "number";
};

// types cannot be used to implement classess but interface can be

// 1.Multiple Types

// print the id of a user either can be a number or string

type isprinttypes = number | string;
// we can also use above one inside function
function isprint(id: number | string) {
  console.log(id);
}
isprint("1");
isprint(1);

// 2. Intersection
type Employe = {
  name: string;
  age: number;
};
type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employe & Manager;

const teamlead: TeamLead = {
  name: "mohit",
  age: 23,
  department: "IT",
};

function printteamlead(teamlead: TeamLead) {
  console.log(teamlead.name, teamlead.department);
}
printteamlead(teamlead);

// Array in Ts

type numberarr = number[];
function maxValue(arr: numberarr): void {
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


//interfaces can be implemented in the classes
// types let u do unions and intersections
// interfaces can use extends to inherit the properties from another interface but types not 

// type x = interface1 | interface2;
// things on right can be interfaces but on left it should be type

//we csn use types to do intersection
// we can use interface to extend 



// Enums - enumeration

// it is used to defines named constant 
// the concept of enmeration is to create a human readable way 
// to represent a set of constant values, which might otherwise represented as number of strings

enum Direction{
    up  ="up", // 0  default value 0 1 2 3 we can assign as per our requirement but it is mandatory  than assign the explicit value to all constant
    down = "down",//1
    left = "left",//2
    right = "right"//3
}
// or you can used
type keyinput = "up" | "down" | "left" | "right";
// but the enum is good

function doSomething(keypressed: Direction){  // (keypressed:keyinput)

}
doSomething(Direction.up);
doSomething(Direction.down);





// Generics
// it is language independent concept


// Problem
// let  say we have a function that needs to return the first element of array. array can be of type either string or integer

// there is the error if we not use generics like if we use some function which is for string than how it can be work for number 

// generics enable to create component that work with any type while still providing compile-time type safety

// this is simple code
function identity( val: (number | string)) : (string| number){
    return val;
}
let output1  = identity("mohit");
let output2 = identity(22);
console.log(output1 , " " , output2) 

// below one is generic code

function identitygeneric<T>(val:T) : T{
return val;
}
let output3 = identitygeneric("muskan");
let output4 = identitygeneric(17)
console.log(output3 , " "  , output4);


// handle the array problem

function getfirstelemment<T>(arr: T[]) : T | undefined{
 return arr[0];
}

const el = getfirstelemment<string>(["mohit" , "muskan"]);
const el2 = getfirstelemment<number>([1 , 2])


// exporting and importing modules

// ts follow es6 module system for import and export moduels

// const express = requires("express") // earlier

import express from "express" // now

// export modul e
// export const a = 1;

// earlier below 
module.exports = {
    a:1
}


// 

