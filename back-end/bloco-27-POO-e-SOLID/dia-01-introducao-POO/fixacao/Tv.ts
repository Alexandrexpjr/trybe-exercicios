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
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = ''
  }

  turnOn():void {
    console.log(this);
  }

  getConnected():string {
    console.log(this._connectedTo);
    return this._connectedTo
  }

  setConnected(connectionType: string):void {
    if (this._connections.includes(connectionType)) {
      this._connectedTo = connectionType
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const samsung = new TV('Samsung', 32, "FullHD", ["HDMI1", "EThernet", "HDMI2"]);

samsung.turnOn();
samsung.getConnected();
samsung.setConnected('Qlqrcoisa');
samsung.getConnected();
samsung.setConnected('HDMI1');
samsung.getConnected();

// Utilizando o mesmo código dos exercícios de fixação anteriores:
// Altere a visibilidade dos atributos definidos na classe Tv para private .
// Crie um método getter e um setter para o atributo _connectedTo , da classe Tv.
// O setter deverá verificar se o valor definido está entre as conexões disponíveis ( _connections ) e:
// Em caso positivo, definir este valor para o atributo _connectedTo ;
// Em caso negativo, imprimir no console a mensagem "Sorry, connection unavailable!"
// Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.