var alimento = prompt('Qual alimento gostaria de consultar?');


if(alimento == 'tomate' || alimento == 'laranja' || alimento == 'abacaxi' || alimento == 'limao'){
   var alimentoDecres = parseFloat(prompt('Ele tava quanto semana passada?'));
   var alimentoAumento = parseFloat(prompt('E essa semana?'));
   if(alimentoDecres < alimentoAumento){
      alert('O '+alimento+' aumentou R$'+(alimentoAumento - alimentoDecres)+' reais');
   }else if(alimentoDecres > alimentoAumento){
      alert('O '+alimento+' diminuiu R$'+(alimentoDecres - alimentoAumento)+' reais');
   }else{
      alert('Nao houve alteracao no preço do '+alimento);
   }
}else{
   alert('Foi mal parca, '+alimento+' ta indisponivel na feira');
}
