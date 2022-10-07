import { Order } from "../../domain/Order";
import { Product } from "../../domain/Product";

export interface IAddProductToOrderHandler {
    handle(product: Product, orderId: number, quantity: number): Order[]
}