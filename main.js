class Estacionamento {
    constructor(){
        this.vagas = new Array();
        this.topo = -1;
        this.tamanho = 9;  
    }

    push(carro){ // insere carro
        if( this.estaCheio()){
            console.log("Estacionamento cheio.");
            return false;
        }
        else {
            this.topo++;
            this.vagas[this.topo] = carro;
            return true;
        }
    }

    pop(placa){ // remove carro
        var c = this.vagas[this.topo];
        this.topo--;
        return c;
        }

    estaCheio() { // verifica se o estacionamento está cheio
        if(this.topo == this.tamanho) {
            alert("Estacionamento cheio!")
            return true;
        }
        else {
            return false;
        }
    }

    estaVazio() { // verifica se o estacionamento está cheio
        if(this.topo == -1) {
            alert("Estacionamento vazio!")
            return false;
        }
        else {
            return true;
        }
    }
    
    listar(){ // lista os carros no estacionamento
        if(this.topo == -1){
            for (let i = 0; i <= this.topo; i++) {
                var c = this.vagas[i];
                c.mostra();
            }
        }
        else {
            alert("Estacionamento vazio");
        }
    }
}

class Carro {
    constructor(p){
        this.placa = p;
        this.manobra = 1;
    }

    mostra() {
        alert("Placa: " +this.placa + " Manobras: " +this.manobra);
    }

    acrescentarManobra() {
        this.manobra++;
    }
}


var estacionamento = new Estacionamento();
var ruaManobra = new Estacionamento();

do{
    
var op = prompt("Estacionamento\nDigite a opção:\n\nE - Entrada\nS - Saída\nL - Listar estacionamento\n0 - Sair");

    switch(op.toUpperCase()){
        case 'E':
            var carroP = new Carro(prompt("Digite a placa do carro:"));
            if (estacionamento.push(carroP)) {
                console.log("Carro com placa "+carroP.placa+ " foi colocado no estacionamento.");
            }
            else {
                console.log("Estacionamento não possui mais vagas, aguarde!");  
            }

        break;

        case 'S':

            console.log("|Estacio"+estacionamento.topo)
            var carroSaida = new Carro(prompt("Digite a placa do carro:"));
            
            do{
                var ce = estacionamento.pop();
                if (carroSaida.placa === ce.placa) {
                    ce.acrescentarManobra();
                    console.log("Carro com placa " +ce.placa+ " saiu do estacionamento.");
                }
                else {
                    ce.acrescentarManobra();
                    ruaManobra.push(ce);
                    console.log("Carro com placa: " +ce.placa+ " foi colocado na rua!");
                }
            }while(carroSaida.placa != ce.placa)

            console.log("RUA "+ruaManobra.topo)
            console.log("Est "+estacionamento.topo)
            var tam=ruaManobra.topo;
            for (var i = 0; i <= tam; i++) {
                
                cr = ruaManobra.pop();
                console.log("Veiculo com placa " +cr.placa+ " voltou para o estacionamento! ",+i);
                cr.acrescentarManobra();
                estacionamento.push(cr);
            }
        break;

        case 'L':
            alert("Veiculo(s) no estacionamento:");        
            estacionamento.listar();            
        break;

        case '0':
            alert("Programa encerrado! bye bye");
        break;
    }
}while((op != 0) )
