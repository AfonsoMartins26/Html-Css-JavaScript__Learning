//Math object

let x = 3.21;
let y =2;
let z;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x) x sem as casas decimais 
//z = Math.pow(x, y) mesma coisa que x elevado a y
//z = Math.sqrt(x)
//z = Math.log(x) logaritmo 
//z = Math.sin(x)
//z = Math.cos(x)
//z = Math.tan(x)
//z = Math.abs(x)
//z = Math.sign(x) dá 1 se x for positivo e -1 se for negativo 
//z = Math.max(x,y) dá o valor maximo entre x y  
z = Math.min(x,y) //dá o valor minimo entre x y 

console.log(z);

//Random Number generator 
//Basics
let ramdomnum = Math.random(); // numero de 0 a 1 

let ramdomnum1 = Math.floor(Math.random()*6)+1; // numeros naturais por causa do floor de 1 a 6 

const min = 50;
const max = 100; 

let numerorandom = Math.floor(Math.random()*(max-min))+min;

console.log(ramdomnum)
console.log(ramdomnum1)
console.log(numerorandom)
//Now to the RAndom Number Generator 

const omeubutao = document.getElementById("omeubutao");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const minimo = 1; 
const maximo = 6;
let ramdomNum1; 
let ramdomNum2; 
let ramdomNum3; 

omeubutao.onclick = function(){
  ramdomNum1 = Math.floor(Math.random() * (maximo - minimo))+minimo
  ramdomNum2 = Math.floor(Math.random() * (maximo - minimo))+minimo
  ramdomNum3 = Math.floor(Math.random() * (maximo - minimo))+minimo
  label1.textContent = ramdomNum1
  label2.textContent = ramdomNum2
  label3.textContent = ramdomNum3
}

//If Statements

let  age = 25; 

if(age >=18){
  console.log("You are old enough to enter this site ")
}
else{
  console.log("Sorry, you can't enter yet")
}

let time = 9;

if(time <12){
  console.log("Good morning")
}
else{
  console.log("Good afternoon")
}

let isStudent = false 

if(isStudent == true){
  console.log("You are a student")
}
else {
  console.log("You are not a student")
}


const mysubmit = document.getElementById("mysubmit")
const mytext = document.getElementByIdmy("mytext")
const resultado = document.getElementById("resultado")
let ages;

mysubmit.onclick = function(){
  
  ages = mytext.value;
  ages=Number(ages)

  if(ages >=100){
    resultado.textContent= "You are too old  to drive";
    }
    else if (ages<0){
      resultado.textContent="Invalid Age";
    }
  else if(ages>=18){
        resultado.textContent="You are old enough to drive";
  }
}

