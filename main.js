class Estacionamento {
    constructor(){
        this.vagas = new Array();
        this.topo = -1;
        this.tamanho = 9;  
    }

    push(carro){ // insere carro
        this.topo++;
        this.vagas[this.topo] = carro;
        this.vagas[this.topo].manobra++;
        }

    pop(placa){ // remove carro
        for (let v = 0; v <= this.topo; v++) {
            if (placa == this.vagas[v].placa) {
                this.manobra++;
                alert("Carro com placa: " +this.vagas[v].placa + " foi removido, com " +this.vagas[v].manobra + " manobras no estacionamento.")
                this.vagas[v] = undefined;
                this.topo--;
            }
            else {
                return this.vagas[v];
                this.topo--;
                this.vagas[v].manobra++;
                this.vagas[v] = undefined;
            }
        }
    }

    estaCheio() { // verifica se o estacionamento está cheio
        if(this.topo == this.tamanho) {
            alert("Estacionamento cheio!")
            return false;
        }
        else {
            return true;
        }
    }

    listar(){ // lista os carros no estacionamento
        if(this.topo > -1){
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
    constructor(p, m){
        this.placa = p;
        this.manobra = m;
    }

    mostra() {
        alert("Placa:" +this.placa + "Manobras: " +this.manobra);
    }

    acrescentarManobra() {
        this.manobra++;
    }
}


var estacionamento = new Estacionamento();
var ruaManobra = new Estacionamento();

/*
var car = new Carro( 'IPC-7938', '0');
estacionamento.push(car);
estacionamento.pop('ITG-1238');
estacionamento.listar();
*/

do{
    
var op = prompt("Estacionamento\nDigite a opção:\nE - Entrada\nS - Saída\nL - Listar");

    switch(op.toUpperCase()){
        case 'E':
            if(estacionamento.estaCheio()){
            var carroP = prompt("Digite a placa do carro:");
            carroP = new Carro (carroP, '0')
            estacionamento.push(carroP);
            }
    
        break;

        case 'S':
            var carroSaida = prompt("Digite a placa do carro:");
            var carroR = estacionamento.pop(carroSaida);
            ruaManobra.push(carroR)
        break;

        case 'L':
            estacionamento.listar();            
        break;

        case 'R':
            ruaManobra.listar();            
        break;

        case '0':
            alert("Programa encerrado! bye bye");
        break;
    }
}while((op != 0) )
