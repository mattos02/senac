/* 
Javascript é a mesma coisa que Java?
b) Falso

Como se declara uma variável em Javascript?
a) const carName

Que operador é usado para dar valor a uma variável?
a) =

Diga o que a seguinte equação retorna: 10 > 9
b) true

Javascript é case-sensitive (que diferencia maiúsculas de minúsculas)?
a) Sim

Como se cria uma função em Javascript?
a) function myFunction()

Como se invoca uma função chamada "myFunction"?
c) myFunction()

Como se escreve o condicional IF em Javascript?
a) if(i===5)

Como escrever o condicional IF para executar um código se "i" não for igual a 5?
b) if (i != 5)

Como um WHILE começa?
b) while (i <= 10)

Como um LOOP FOR começa?
d) for (i=0;i<=5;i++)

Como se adiciona um comentário em Javascript?
b) //Este é um comentário

Como adicionar um comentário com mais de uma linha?
a) /Este comentário tem
mais de uma linha/

Qual é a maneira correta de escrever um array?
a) const colors = ['red','green','blue']

Usando um comando em Javascript, como você arredondaria o número 7.25?
Math.round(7.25)

Qual é a maneira correta de nomear uma variável?
e) myName

Qual o valor de uma variável que está vazia?
b) undefined
---------------------------------------------//-----------------------------------------------------
const carName = "Ferrari"
------------------------
let x = 50
------------------------
let x = 5;
let y = 10;
let soma = x + y;

console.log("A soma de", x, "+", y, "é igual a", soma);
------------------------
let x = 5;
let y = 10;
let z = x + y;

console.log("A soma de", x, "+", y, "é igual a", z);
------------------------
let firstName = "John", lastName = "Doe", age = 35;
------------------------
let resultado = 10 * 5;
console.log("O resultado da multiplicação de 10 por 5 é:", resultado);
------------------------
let restoDivisao = 15 % 9;
console.log("O resto da divisão de 15 por 9 é:", restoDivisao);
------------------------
let x = 10;
let y = 5;
x += y;
console.log("O valor de x é:", x);
------------------------
let x = 10;
let y = 5;
x *= y;
console.log("O valor de x é:", x);
------------------------
lenght e lastName são variáveis.
let length = 16;
let lastName = "Johnson"; 

`x` é um objeto. O objeto contém duas propriedades que são strings
   const x = {
    firstName: "John",
    lastName: "Doe"
-------------------------
function myFunction() {
  alert("Hello World!");
}
myFunction()
-------------------------
function myFunction() {
  console.log("Hello World");
}
myFunction();
-------------------------
function myFunction() {
  return "Hello";
}
console.log(myFunction() + " World");
-------------------------
const person = {
  firstName: "John",
  lastName: "Doe"
};
console.log(person.firstName);
-------------------------
const person = {
  firstName: "John",
  lastName: "Doe" 
};
person.country = "Norway";
console.log(person);
-------------------------
const person = {
  name: "John",
  age: 50
};
console.log(person.name + " tem " + person.age + " anos.");
-------------------------
let txt = "Hello World!";
let x = txt.length;
console.log(x);
-------------------------
let str1 = "Hello ";
let str2 = "World!";
let mensagem = str1 + str2;
console.log(mensagem);
-------------------------
let txt = "Hello World!";
let txtMaiusculo = txt.toUpperCase();
console.log(txtMaiusculo);
-------------------------
let txt = "Hello World";
let novoTxt = txt.replace("Hello", "Welcome");
console.log(novoTxt);
-------------------------
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1]);
-------------------------
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Ford";
console.log(cars);
-------------------------
const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);
-------------------------
const fruits = ["Banana", "Orange", "Apple"];
fruits.splice(-1, 1);
console.log(fruits);
-------------------------
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");
console.log(fruits);
-------------------------
const fruits = ["Banana", "Orange", "Apple"];
fruits.splice(1, 2);
console.log(fruits);
-------------------------
let x = 10;
let y = 5;
if(x > y )
console.log("verdadeiro");
-------------------------
let x = 10;
let y = 10;

if (x === y) {
  console.log("verdadeiro")
--------------------------
let x = 10;
let y = 5;

if (x !== y) {
  console.log("verdadeiro")
--------------------------
let x = 10;
let y = 5;

if (x > y) {
  console.log("Hello World");
}
--------------------------
let x = 10;
let y = 5;

if (x > y) {
  console.log("Hello World");
} else {
  console.log("Goodbye");
}
--------------------------
let fruits = "banana";

switch(fruits) {
  case "banana":
    console.log("Olá");
    break;
  case "maçã":
    console.log("Bem-vindo");
    break;
}
--------------------------
 default:
    console.log("Nem um nem outro");
--------------------------
for (let i = 0; i <= 9; i++) {
  console.log(i);
}
--------------------------
const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
---------------------------
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
---------------------------
let i = 0;

while (i < 10) {
  console.log(i);
  i += 2;
}
---------------------------
*/
