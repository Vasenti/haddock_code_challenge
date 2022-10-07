import ordersInMemory from '../../infrastructure/InMemoryOrders/Orders.json';
import promotionConfig from '../../infrastructure/config/config.json';

import path from 'path';
import fs from 'fs';

import { Order } from '../../domain/Order';
import { OrderItem } from '../../domain/OrderItem';
import { Product } from '../../domain/Product';
import { IGetOrderHanlder } from './IGetOrderHandler';

export class GetOrderHandler implements IGetOrderHanlder{
    constructor() {}

    public handle(orderId: number): Order{
        const orders: Order[] = this.readAllOrders();
        const order = orders.find((order: Order) => order.id == orderId) as Order;
        console.log(order)
        const checkDiscountOrder: Order = this.checkDiscount(order);
        return checkDiscountOrder;
    }

    private readAllOrders(): Order[]{
        const file = fs.readFileSync(path.join(__dirname, '../../infrastructure/InMemoryOrders/Orders.json'), 'utf-8');
        const orders: Order[] = JSON.parse(file);
        return orders;
    }

    private checkDiscount(order: Order): Order{
        if(!promotionConfig.promotions.discount.active){
            return order;
        }
        
        const orderTotalPrice = this.getTotal(order._orderItems);

        if(orderTotalPrice >= promotionConfig.promotions.discount.minimunToSpend) {
            order._totalPrice = orderTotalPrice - promotionConfig.promotions.discount.discountFinalPrice;
            order._comments = "Se ha aplicado un descuento de 5€";
        }

        order._totalPrice = orderTotalPrice;
        order._comments = "";

        return order;
    }

    private getTotal(orderItems: OrderItem[]): number{
        return orderItems.reduce((accumulator, orderItem: OrderItem) => (accumulator + orderItem._orderItemPrice), 0);
    }
}