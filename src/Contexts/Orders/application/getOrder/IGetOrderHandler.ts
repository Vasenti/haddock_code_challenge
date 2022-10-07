import { Order } from "../../domain/Order";
import { OrderItem } from "../../domain/OrderItem";

export interface IGetOrderHanlder {
    handle(orderId: number): Order | [];
}