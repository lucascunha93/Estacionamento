class Estacionamento {
    constructor(){
        this.vagas = new Array();
        this.topo = -1;
        this.tamanho = 10;  
    }

    push(carro){ // insere carro e verificar se está cheio o estacionamento
        if(!this.estaCheio()){
        var verifica = true;
        this.topo++;

        this.vagas[this.topo] = carro;
        }
        else {
            alert("Estacionamento cheio")
        }
    }

    pop(placa){ // remove o carro desejado e corrige o estacionamento

        var r = 0;

        for (let v = 0; v <= this.topo; v++) {
            if (placa == this.vagas[v].placa) {
                this.vagas[v].acrescentarManobra();
                alert("Carro foi manobrado: " +this.vagas[v].manobra + " veze(s)")
                
                this.vagas[v] = null;
                r = v;
            }
        }

        for (let m = this.topo; m > r; m--) {
            var man = this.vagas[m];
            man.acrescentarManobra();
            
        }

        for (let e = 0; e < this.topo; e++) {
            if(this.vagas[e] == null){
                this.vagas[e] = this.vagas[e+1];
                this.vagas[e+1] = null;
            }
        }
        this.topo--;
    }

    estaCheio() { // verifica se o estacionamento está cheio
        if(this.topo == this.tamanho-1) {
            return true;
        }
        else
            return false;
    }

    listar(){ // lista os carros no estacionamento
        for (let i = 0; i <= this.topo; i++) {
            var c = this.vagas[i];
            c.mostra();
        }
    }
}

class Carro {
    constructor(p, m){
        this.placa = p;
        this.manobra = m;
    }

    mostra() {
        alert("Placa:" +this.placa + "Manobras: " +this.manobra);
    }

    compara(){
        return this.placa;
        }
    
    acrescentarManobra(){
        this.manobra++;
    }

}


var estacionamento = new Estacionamento();

/*var car = new Carro( 'IPB-7938', '0');
estacionamento.push(car);
var car = new Carro( 'ITG-1238', '0');
estacionamento.push(car);
var car = new Carro( 'IPC-7938', '0');
estacionamento.push(car);
var car = new Carro( 'ITS-1238', '0');
estacionamento.push(car);
var car = new Carro( 'IPj-7938', '0');
estacionamento.push(car);
var car = new Carro( 'ITh-1238', '0');
estacionamento.push(car);
var car = new Carro( 'IPc-7938', '0');
estacionamento.push(car);
var car = new Carro( 'ITL-1238', '0');
estacionamento.push(car);
var car = new Carro( 'IPÇ-7938', '0');
estacionamento.push(car);
var car = new Carro( 'ITQ-1238', '0');
estacionamento.push(car);
var car = new Carro( 'IPA-7938', '0');
estacionamento.push(car);
var car = new Carro( 'ITX-1238', '0');
estacionamento.push(car);

estacionamento.pop('ITG-1238');
estacionamento.listar();
*/

do{
    
var op = prompt("Estacionamento\nDigite a opção:\nE - Entrada\nS - Saída\nL - Listar");

    switch(op.toUpperCase()){
        case 'E':
            var carroP = prompt("Digite a placa do carro:");
            carroP = new Carro (carroP, '0')
            estacionamento.push(carroP);
    
        break;

        case 'S':
            var carroSaida = prompt("Digite a placa do carro:");
            estacionamento.pop(carroSaida);

        break;

        case 'L':
            estacionamento.listar();

        break;
        
        case '0':
            alert("Programa encerrado! bye bye");
        break;
    }
}while((op != 0) )
