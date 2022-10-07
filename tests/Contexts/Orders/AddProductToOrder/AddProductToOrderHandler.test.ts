import { AddProductToOrderHandler } from "../../../../src/Contexts/Orders/application/addProductToOrder/AddProductToOrderHandler";
import { Order } from "../../../../src/Contexts/Orders/domain/Order";
import { Product } from "../../../../src/Contexts/Orders/domain/Product";

let addProductHandler: AddProductToOrderHandler;

beforeEach(() => {
    addProductHandler = new AddProductToOrderHandler();
});

describe('AddProductToOrder handler', () =>{
    it('should be an instance of AddProductToOrder', () =>{
        expect(addProductHandler).toBeDefined;
        expect(addProductHandler).toBe(AddProductToOrderHandler);
    });

    it('should return order with the new product', () => {
        const product: Product = new Product(12, 'Hamburger', 8);
        const orderId: number = 32;
        const quantity: number = 3; 

        const order: Order[] = addProductHandler.handle(product, orderId, quantity);

        expect(order).toBeDefined;
    })
})