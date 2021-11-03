function criaElemento(){
   var principal = document.createElement('div');
   principal.id = 'principal';
   principal.style = 'display: flex; flex-direction: row;' ;

   for(let i = 0; i < 3; i++){
      let div = document.createElement('div');
      div.style="height: 100px; width: 100px; background-color: red;";
      principal.appendChild(div);
   }
   document.querySelector('body').appendChild(principal)


   principal.addEventListener('click', function(){                //nao cheguei uma conclusao
      //virar de row pra column
      if(principal.hasAttribute('flex-direction: row')){
         principal.style = 'flex-direction: column;'
      }else{
         principal.style = 'flex-direction: row;'
         console.log('oporra')
      }
   }
   ); 

}



window.onload = function(){ // carregamento da pagina for realizado injeta HTML para utilizar o programa
   document.getElementById('corpo').innerHTML = ` <h1>Teste de programa</h1> 
   `;
   // <div>
   //    <div style="width: 100px; height: 100px;"></div>
   //    <div style="width: 100px; height: 100px;"></div>
   //    <div style="width: 100px; height: 100px;"></div>
   // </div>



   criaElemento()
}   
