var temp = parseInt(prompt('Qual a sua temperatura?'));

// alert('o tipo e', typeof temp)
// console.log('o tipo e', typeof temp)
if(typeof temp == 'number'){  //PERGUNTAR PARA JESSICA SOBRE COMPARAÇÃO DE typeof temp == Number
   if( temp > 38){
      console.log('Mermao tu ta com frebe')
      alert('Mermao tu ta com frebe')
   }else{
      console.log('ta sussa')
      alert('ta sussa')
   }
}else{
   alert('Digita Numero Parça')
}
