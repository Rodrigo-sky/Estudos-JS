function listaDecrescente(numero){
   let strNumero = ''
   if (numero > 0){
      while (numero >= 0){
         strNumero = strNumero + numero.toString() + '\n';
         numero --;
      }
      console.log(strNumero);
   }
}
function fizz(numero){
   let strNumero = ''
   let aux = 1
   if (numero > 0){
      while (numero >= aux){
         if(aux % 3 == 0){
            strNumero = strNumero + 'fizz' + '\n';
         }else{
            strNumero = strNumero + aux.toString() + '\n';
         }
         aux ++;
      }
      console.log(strNumero);
   }
}

console.log(fizz(25))