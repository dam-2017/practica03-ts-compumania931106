"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena_1 = require("./cadena");
var operaciones_1 = require("./operaciones");
var cad = new cadena_1.Cadena('ana', 'Hola a todos desde TypeScript');
var num = new operaciones_1.Operaciones([1, 2, 3]);
console.log('Utilizando la clase Cadena [text = ana and multiText = Hola a todos desde TypeScript]');
console.log('isPalindromo?: ' + cad.isPalindromo);
console.log('How many vowels?:' + cad.howVowels);
console.log('How many words in multiText?: ' + cad.countWords);
console.log('How many letters in multiText?: ' + cad.countLetters);
console.log('');
console.log('Utilizando la clase Operaciones');
console.log('Add of 1,2,3 = ' + num.suma);
console.log('Subtraction of 10 - [1,2,3] = ' + num.resta);
console.log('Factorial of [1,2,3] = ' + num.factorial);
console.log('Primos of [1,2,3] = ' + num.isPrimo);
