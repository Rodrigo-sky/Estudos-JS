class gato {
   constructor(nome,miar,sexo){
      this.nome = nome;
      this.miado = miar;
      this.sexo = sexo;
   }
   miar = function(){
      console.log(this.nome +' esta miando! Miaaaww')
   }

   comer = function(){
      console.log('Deu fome! ' + this.nome +' esta comendo' )
   }
}

const amelie = new gato('Amelie', 5 , 'F');
amelie.miar();
amelie.comer();

var oie = gets();
console.log(oie);