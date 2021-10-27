let valor1 = parseInt(6); //pessoa
let valor2 = parseFloat(145); // horas
let valor3 = parseFloat(15.55); // valor por hora

// Escreva o seu código aqui

let salario = valor2 * valor3;
var verifica = salario.toString();
if(verifica.indexOf('.') == -1){
   salario = salario + '.00';
}
console.log('NUMBER = ' + valor1);
console.log('SALARY = U$ ' + salario)