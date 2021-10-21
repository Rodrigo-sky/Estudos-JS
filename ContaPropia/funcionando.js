function dirigirEBeber(idade){
   if(idade > 18){
      return 'Ja pode dirigir e beber'
   }else{
      return 'Nao pode nem dirigir nem beber'
   }
}

function previsaoRodagem(qtdLitros, kmMedia){
   return qtdLitros * kmMedia
}

console.log(previsaoRodagem(18, 10))