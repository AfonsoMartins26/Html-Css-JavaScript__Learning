// isto é um comentário em linha em javascript
/*
isto é um comentário de varisa linhas em javascript
é examatemte a mesma coisa que um comentário em css
*/
/*
vai aparecer na consola
console.log('Hello');
console.log('I like pizza');

vai aparecer um aviso na tela com o texto
window.alert('Hello!');
window.alert('I like pizza!');
*/

document.getElementById('myh1').textContent = 'Hello';
document.getElementById('myp').textContent = 'I like pizza';

//varáveis
//declariton let x
//assignment x = 100
// let x =100

let x; 
x= 100;

console.log(x);

let age = 18; 

console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`Your x value is ${x}`);

let fistname = "Afonso";

console.log(typeof fistname);
console.log(`Your name is ${fistname}`);


let online = true; 

console.log(`Afonso is online: ${online}`)


document.getElementById("p1").textContent = `My name is ${fistname}`;
document.getElementById("p2").textContent = `My age is ${age}`;
document.getElementById("p3").textContent = `I am Online: ${online}`;

// aritmetic operators 

let students = 30; 

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = stundets / 2;
//students = students **2; ao quadrado
//students = students %2; o resto da divisao

//uma forma mais rapida
//students +=2;
//students -=1;
//students *=2;
//students /=2;
//students **=2;
//students %=2;

//adiciona/subtrai 1 
//students++;
//students--;

console.log(students);

let result = 1+2*3+4**2;

console.log(result)

