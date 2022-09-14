class fila {
   constructor(){
      this.itens = [];
   }

   chegada(...itens){
      for(let i = 0; i<itens.length; i++){
         this.itens.push(itens[i]);
      }
   }
   partida(){
      if(this.itens.length == 0){
         return ('Fila Vazia')
      }
      return this.itens.shift();
   }
   exibe(){
      return (this.itens)
   }
}

let prato = new fila;
console.log(prato.chegada('cadeirante','corcunda', 'cego', 'gravida', 'anao'))
console.log(prato.exibe())
console.log(prato.chegada('mudo'))
console.log(prato.exibe());
console.log(prato.partida());
console.log(prato.exibe());
