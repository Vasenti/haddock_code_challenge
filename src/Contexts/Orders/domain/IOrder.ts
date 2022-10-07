import { OrderItem } from "./OrderItem";

export interface IOrder {
    id: number;
    _orderItems: Array<OrderItem>;
    _comments: string;
    _totalPrice: number;
    _discountedPrice: number;
}