import { Request, Response } from "express";
import { AddProductToOrderHandler } from "../../../Contexts/Orders/application/addProductToOrder/AddProductToOrderHandler";
import { Product } from "../../../Contexts/Orders/domain/Product";

export class AddProductToOrderController {
    constructor() {}

    public run(req: Request, res: Response){
        const product: Product = req.body.product;
        const addProductHandler = new AddProductToOrderHandler();
        const addProductResponse = addProductHandler.handle(product, req.body.orderId, req.body.quantity);
        res.status(200).json(addProductResponse).end();
    }
}