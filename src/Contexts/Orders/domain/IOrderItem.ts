import { Product } from "./Product";

export interface IOrderItem {
    _product: Product;
    _quantity: number;
    _orderItemPrice: number;
    _promotionApplied: boolean;
    _promotionType: string;
}