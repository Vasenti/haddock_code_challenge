export class Product {
    private _number: number;
    private _name: string;
    private _price: number;

    constructor(number: number, name: string, price: number){
        this._number = number;
        this._name = name;
        this._price = price;
    }

    public get number(){
        return this._number;
    }

    public set number(number: number) {
        this._number = number;
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get price(){
        return this._price;
    }

    public set price(price: number){
        this._price = price;
    }
}