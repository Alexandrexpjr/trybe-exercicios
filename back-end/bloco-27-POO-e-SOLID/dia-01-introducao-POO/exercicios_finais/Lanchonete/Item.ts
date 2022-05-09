export class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get price(): number {
    return this._price
  }

  get name(): string {
    return this._name
  }
}