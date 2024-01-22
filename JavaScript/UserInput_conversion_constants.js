// |Accept user input| 

//easy way 
/*
let username;

username = window.prompt(`Whats your username?`)

console.log(username)

*/
//professional way


let username;

document.getElementById("mysubmit").onclick = function(){
  username = document.getElementById("mytext").value;
  document.getElementById("myh1").textContent = `Hello ${username}`
}

// |Type conversion|

/*
let age = window.prompt(`How old are you?`);

age = Number(age);
age +=1;

console.log(age, typeof age);

*/

let x = "";
let y = "0";
let z = "online";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);

// constants 


const pi = 3.1415;
let radius;
let circumferece;



//radius = window.prompt(`Enter the radius of a circle`);
//radius = Number(radius);

//circumferece = 2* PI *radius

//console.log(circumferece);

document.getElementById("mysubmit2").onclick = function(){
  radius = document.getElementById("mytext1").value; 
  radius = Number(radius);
  circumferece = 2 * pi * radius;
  document.getElementById("myh3").textContent = circumferece + " cm";
}

