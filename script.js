/*Identificando o Dia da Semana atraves dos Numeros*/

function weekNumb(event) {
  event.preventDefault();

let numero = document.getElementById("numero").value;
let resultado = document.getElementById("resultado");

if (numero === "1"){
  resultado.value = "Domingo";
}
else if (numero === "2"){
  resultado.value = "Segunda-feira";
}
else if (numero === "3"){
  resultado.value = "Terca-feira"
}
else if (numero === "4"){
  resultado.value = "Quarta-feira";
}
else if (numero === "5"){
  resultado.value = "Quinta-feira";
}
else if (numero === "6"){
  resultado.value = "Sexta-feira";
}
else if (numero === "7"){
  resultado.value = "Sabado";
}
else{
  resultado.value = "Invalido";
}
}