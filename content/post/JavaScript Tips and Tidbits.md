---
title: JavaScript Tips and Tidbits
date: 2019-04-22T00:00:00.000Z
tags: 'dev post, javascript'
---

Here are some little javaScript tips and tidbits I have learned/feel the need to write down for future reference:

1. **Hoisting**
* 	Basically, when Javascript compiles all of your code, all variable declarations using var are hoisted/lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “hoisting”.

* Functions declarations are also hoisted, but these go to the very top, so will sit above all of the variable declarations.

2. **var vs. let vs. const and Hoisting** Hoisting is limited to variables defined using `var` keyword and function names. Variables defined using `let` and `const` are not hoisted and their use remains limited only to the scope in which they were defined.
	
* Declarations made with var can be accessed from outside of their initial scope, whereas declarations made with let and const are not.

* As we can see in the below example, declarations made with var return undefined whereas those made with let and const return errors (credit to gvlachos for raising and writing the following):

```
console.log(‘1a’, myName1); // undefined
if (1) {
 console.log(‘1b’, myName1); // undefined
 var myName1 = ‘Sunil’;
}

console.log('2a', myName2); // error: myName2 is not defined
if (1) {
    console.log('2b', myName2); // undefined
    let myName2 = 'Sunil';
}

console.log('3a', myName3); // error: myName3 is not defined
if (1) {
    console.log('3b', myName3); // undefined
    const myName3 = 'Sunil';
}
```
