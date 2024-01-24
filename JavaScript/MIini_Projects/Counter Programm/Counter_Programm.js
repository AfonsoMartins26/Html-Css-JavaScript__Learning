// Counter Programm 

const butaodemenos = document.getElementById("butaodemenos");
const reset = document.getElementById("reset");
const butaodemais = document.getElementById("butaodemais");
const countlabel = document.getElementById("countlabel");
let count = 0;

butaodemenos.onclick = function(){
  count = count -1
  countlabel.textContent= count
}

reset.onclick =function(){
  count= 0 
  countlabel.textContent= count
}

butaodemais.onclick = function(){
  count = count + 1
  countlabel.textContent = count
}