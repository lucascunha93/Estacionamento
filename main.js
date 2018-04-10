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
        var cont = 0;

        for (let v = 0; v <= this.topo; v++) { // remove o carro pela placa, acrescentando a manobra
            if (placa == this.vagas[v].placa) {
                this.vagas[v].acrescentarManobra();
                alert("Carro foi manobrado: " +this.vagas[v].manobra + " veze(s)");
                
                this.vagas[v] = undefined;
                r = v;
            }
        }

        for (let m = this.topo; m > r; m--) { // carros são removido para a rua(outra pilha);
            this.vagas[m].manobrasCarros();
            this.vagas[m] = undefined;
            this.topo--;
            cont++;
        }

        for (let e = this.topo; e <= cont ; e++) { // reposiciona os carros no estacionamento
            if(this.vagas[e] == undefined) {
                
                this.vagas[e] == ruaManobra.estacionarCarro();
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

    acrescentarManobra() {
        this.manobra++;
    }

    manobrasCarros() {
        this.manobra++;
        var carroM = new Carro(this.placa, this.manobra);
        ruaManobra.push(Carro);
    }

    estacionarCarro() {
        for (let r = 0; r < this.topo ; r++) {
            if(ruaManobra.vagas[r]== undefined){
                break;
            }
            else {
                this.manobra++;
                return ruaManobra[r];
            }
        }
        ruaManobra.pop(this.placa);
    }

}


var estacionamento = new Estacionamento();
var ruaManobra = new Estacionamento();

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

        case 'A':
            console.log(Estacionamento);
            
        break;
        case '0':
            alert("Programa encerrado! bye bye");
        break;
    }
}while((op != 0) )
