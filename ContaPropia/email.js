function validaEmail (email){ //verifica o email se é valido pela presenca do @ e .com
   if (email.indexOf('@') != -1 & email.indexOf('.com') != -1 ){ // -1 é quando nao apresenta o elemento
      return true;
   }else{
      return false;
   }
}
function ExibeResultadoValidacao(validaEmail){
   if(validaEmail){
      document.write(`
      <p>email validado</p>
      `)
   }else{
   document.write(`
   <p>email fornecido INVALIDO</p>
   `)
   }
}
var email = prompt('Digite o email')
ExibeResultadoValidacao(validaEmail(email))






