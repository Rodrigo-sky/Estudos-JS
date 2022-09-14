function criaElemento(){
   var principal = document.createElement('div');
   principal.id = 'principal';
   principal.style = 'display: flex; flex-direction: row;' ;

   for(let i = 0; i < 3; i++){
      let div = document.createElement('div');
      div.style="height: 100px; width: 100px; background-color: red; margin:5px";
      principal.appendChild(div);
   }
   document.querySelector('body').appendChild(principal);


   principal.addEventListener('click', function(){                //nao cheguei uma conclusao
      //virar de row pra column e collumn pra row
      console.log('flex direction ',(principal.style).hasAttribute('flex-direction'));
      console.log('style ',principal.hasAttribute('style'));
      if(principal.hasAttribute('flex-direction: row')){
         console.log('é row')
         principal.style = 'display: flex; flex-direction: column;'
      }else{
         principal.style = 'display: flex; flex-direction: row;'
         console.log('oporra, nao é row')
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
