"use strict";
// Utilizando o que você já aprendeu até aqui, faça os seguintes exercícios:
// Crie uma classe chamada Tv, com os atributos:
// - brand : marca da TV;
// size : tamanho em polegadas;
// resolution : resolução da tela;
// connections : conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo : conexão atual Este atributo não precisa ser inicializado no construtor .
// Dentro da classe Tv, crie o método turnOn , que imprimirá os atributos inicializados no construtor.
// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
class TV {
    constructor(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    turnOn() {
        console.log(this);
    }
}
const samsung = new TV('Samsung', 32, "FullHD", ["HDMI1", "EThernet", "HDMI2"]);
samsung.turnOn();
