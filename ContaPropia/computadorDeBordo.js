var carro = {
   'cor': 'vermelho',
   'capacidadeTanque' : 50,
   'qtdCombustivelTanque' : 10,
   'consumoMedio' : 9,
   'rodaQuanto' : function (qtdCombustivelTanque, consumoMedio){
      return qtdCombustivelTanque * consumoMedio
   },
   'dirija' : function (qtdKm){
      //com x km gasta y litros
      let litros = qtdKm/this.consumoMedio;
      this.capacidadeTanque = this.capacidadeTanque - litros;
      console.log(`andou ${qtdKm}km e sobrou ${(this.capacidadeTanque).toFixed(2)} litros`)
   },
   'getCor' : function(){
      return this.cor;
   },
   'setCor' : function(corNova){
      this.cor = corNova;
   },
   'getCapacidade' : function(){
      return this.capacidadeTanque;
   },
   'setCapacidade' : function(capacidadeNova){
      this.capacidadeTanque = capacidadeNova;
   },
   'getConsumo' : function(){
      return this.consumoMedio;
   },
   'setConsumo' : function(consumoNovo){
      this.consumoMedio = consumoNovo;
   },
}


console.log(carro.dirija(30));