import promotionConfig from '../../infrastructure/config/config.json';

import { Product } from "../../domain/Product";
import { IAddProductToOrderHandler } from "./IAddProductToOrderHandler";
import fs from 'fs';
import path from 'path';
import { Order } from "../../domain/Order";
import { OrderItem } from "../../domain/OrderItem";

enum promotionType {
    twoForOne = "Se ha aplicado la promoción de 2x1.",
    none = ""
}

export class AddProductToOrderHandler implements IAddProductToOrderHandler{
    
    public handle(product: Product, orderId: number, quantity: number): Order [] {
        const checkOrderItemPromotion: OrderItem = this.checkTwoForOnePromotion(product, quantity);
        let orders: Order[] = this.readAllOrders();
        let orderIndex: number = orders.findIndex((order: Order) => order.id == orderId);
        orders[orderIndex]._orderItems.push(checkOrderItemPromotion); 
        this.writeOrders(orders);
        return orders;
    }

    private readAllOrders(): Order[]{
        const file = fs.readFileSync(path.join(__dirname, '../../infrastructure/InMemoryOrders/Orders.json'), 'utf-8');
        const orders: Order[] = JSON.parse(file);
        return orders;
    }

    private writeOrders(orders: Order[]): void {
        fs.writeFileSync(path.join(__dirname, '../../infrastructure/InMemoryOrders/Orders.json'), JSON.stringify(orders));
    }

    private checkTwoForOnePromotion(product: Product, quantity: number): OrderItem {
        if(!promotionConfig.promotions['2-for-1'].active || quantity < 2){
            return new OrderItem(product, quantity, product.price * quantity, false, promotionType.none); 
        }

        let price = 0;

        if(promotionConfig.promotions['2-for-1'].products_id.includes(product.number)) {
            if(quantity % 2 == 0){
                price = (product.price * quantity) / 2;
            }else if(quantity < 2) {
                price = (product.price * quantity);
            }else {
                price = ((product.price * quantity - 1) / 2) + product.price;
            }
        }

        return new OrderItem(product, quantity, price, false, promotionType.twoForOne);
    }
}