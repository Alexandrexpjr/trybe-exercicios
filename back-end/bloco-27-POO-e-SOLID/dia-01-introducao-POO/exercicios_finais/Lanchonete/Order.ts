import { Client } from "./Client";
import { Item } from "./Item";

export class Order {
  private _client: Client;
  private _items: Item[];
  private _paymentMethod: string;
  private _discount?: number;

  constructor(client: Client, items: Item[], payment: string, discount?: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = payment;
    this._discount = discount;
  }

  get total(): number {
    return this._items.reduce((prev, curr) => prev + curr.price, 0);
  }

  get totalWithDiscount(): number {
    return this.total * (1 - (this._discount || 0));
  }

  get orderLog() {
    return `Client: ${this._client.name}, Items: ${this._items.map(n => n.name)}, Total: ${this.total}, Total with discount: ${this.totalWithDiscount}`;
  }
}

const client = new Client('Pedrão');
const item1 = new Item('Pizza', 30.00);
const item2 = new Item('Refri', 5.00);

const order1 = new Order(client, [item1, item2], 'Cartão', 0.2);

console.log(order1.orderLog);