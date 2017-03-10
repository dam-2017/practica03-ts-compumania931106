import { Cadena } from './cadena';
import { Operaciones } from './operaciones';

let cad:any = new Cadena('ana', 'Hola a todos desde TypeScript');
let num:any = new Operaciones([1,2,3]);

console.log('Utilizando la clase Cadena [text = ana and multiText = Hola a todos desde TypeScript]');
console.log('isPalindromo?: '+cad.isPalindromo);
console.log('How many vowels?:' + cad.howVowels);
console.log('How many words in multiText?: ' + cad.countWords);
console.log('How many letters in multiText?: ' + cad.countLetters);

console.log('');
console.log('Utilizando la clase Operaciones');
console.log('Add of 1,2,3 = ' + num.suma);
console.log('Subtraction of 10 - [1,2,3] = ' + num.resta);
console.log('Factorial of [1,2,3] = ' + num.factorial);
console.log('Primos of [1,2,3] = ' + num.isPrimo);

