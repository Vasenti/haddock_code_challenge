import { IOrderItem } from "./IOrderItem";
import { Product } from "./Product";

export class OrderItem implements IOrderItem{
    _product: Product;
    _quantity: number;
    _orderItemPrice: number;
    _promotionApplied: boolean;
    _promotionType: string;

    constructor(product: Product, quantity: number, orderItemPrice: number, promotionApplied: boolean, promotionType: string){
        this._product = product;
        this._quantity = quantity;
        this._orderItemPrice = orderItemPrice;
        this._promotionApplied = promotionApplied;
        this._promotionType = promotionType;
    }
    
    public get product(){
        return this._product;
    }

    public set product(product: Product){
        this._product = product;
    }

    public get quantity(){
        return this._quantity;
    }

    public set quantity(quantity: number){
        this._quantity = quantity;
    }
}