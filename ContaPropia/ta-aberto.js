function abre(){
   var abertos = document.createElement('p');                     //document.createElement() cria um elemento de terminada tag
   abertos.innerText = 'Estamos Abertos pra bosta nenhuma!'       //inner.text = vai inserir um texto na tag
   let getBody = document.querySelector('body');
   getBody.appendChild(abertos);                                 //feito o append para o corpo atraves do querySelector

   
   // var butao = document.querySelector('#xuxu')                 //busca a id xuxu
   // if(butao.innerText == 'Abrir'){                             //verifica se o conteudo do botao
   // } 
}
  function fecha(){
     var fechado = document.querySelector('p');
     fechado.innerText = 'Tamo fechado, cai fora!';
   //   if(fechado.innerText == 'Estamos Abertos pra bosta nenhuma!'){
   //      fechado.innerText = 'Tamo fechado, cai fora!';
   //   }
  }

window.onload = function(){ // carregamento da pagina for realizado injeta HTML para utilizar o programa
   document.getElementById('corpo').innerHTML = ` <h1>Teste dos programa</h1> 
   <button type="button" onclick='abre()'>Abrir</button>
   <button type="button" onclick='fecha()'>Fechar</button>
   `;
   
   
}   

