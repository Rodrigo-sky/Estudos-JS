function validaItem(item){ //valida itens q sejam impares
   if (item.length % 2 != 0){
      return true;
   }else{
      return false;
   }
}
function programa(){ //programa em si
   var qtdLista = parseInt(prompt('Digite a quantidade de itens na lista parca'));
   var lista = [];
   while(lista.length < qtdLista){
      let item = prompt('Qual o item a ser inserido?');
      if (validaItem(item)){
         lista.push(item);
         alert(item + ' foi adicionado!');
      }else{
         alert('lek, o item e invalido, digite outro');
      }
   }
   alert('A lista de compras de carlos é:\n'+ lista.join(' | ') )
}
window.onload = function(){ // carregamento da pagina for realizado injeta HTML para utilizar o programa
   document.getElementById('corpo').innerHTML = ` <h1>Teste de programa</h1> 
   <button type="button" onclick="programa()">Clique em mim</button>
   `;
   
   console.log('Onload disparado');
}   
