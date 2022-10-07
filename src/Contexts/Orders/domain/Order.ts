import { IOrder } from "./IOrder";
import { OrderItem } from "./OrderItem";

export class Order implements IOrder{
    id: number;
    _orderItems: OrderItem[];
    _comments: string;
    _totalPrice: number;
    _discountedPrice: number;
    
    constructor(id: number, orderItems: Array<OrderItem>, comments: string, totalPrice: number, discountedPrice: number) {
        this.id = id;
        this._orderItems = orderItems;
        this._comments = comments;
        this._totalPrice = totalPrice;
        this._discountedPrice = discountedPrice;
    }
}