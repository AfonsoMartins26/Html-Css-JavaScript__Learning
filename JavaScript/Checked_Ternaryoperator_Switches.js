// Checked property 

const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const masterbtn = document.getElementById("masterbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit")
// paragrafos 
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){

  if(mycheckbox.checked){
    subresult.textContent = `You are subscribe`;  
  }
  else{
    subresult.textContent = `You are not subscribe`;
  }

  if(visabtn.checked){
    paymentresult.textContent = `You are paying with Visa`;
  }
  else if(masterbtn.checked) {
    paymentresult.textContent = `You are paying with MasterCard`;
  }
  else if(paypalbtn.checked){
    paymentresult.textContent = `You are paying with PayPal`;
  }
  else{
    paymentresult.textContent = `You must select a payment type`;
  }
}

// Ternary operator 
// Shortcut to if{} and else{}

let age = 18 
let message = age >= 18 ? "You're a adult" : "You're a minor";
console.log(message);


// Switches 

let day = 1;

switch(day){
  case 1:
      console.log( 'Monday');
      break;
  case 2:
      console.log( `Tuesday`);
      break;
  case 3:
      console.log(`Wednesday`);
      break
  case 4:
      console.log('Thursday');
      break;
  case 5: 
      console.log( 'Friday');
      break ;
  case 6: 
      console.log( 'Saturday');
      break;
  case 7: 
      console.log (`Sunday`);
      break;
  default: 
    console.log( 'Not a valid day') ; 
}
// a razao por ter estes breaks é para executar o codigo conforme a condicao e não executar todos os codigos...

