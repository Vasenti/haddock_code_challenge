import { Request, Response, Router } from "express";
import { AddProductToOrderController } from "../Controllers/Orders/addProductToOrder/AddProductToOrderController";

export const register = (router: Router) => {
    const addProductToOrderController = new AddProductToOrderController();
    router.post('/order/addProduct', (req: Request, res: Response) => addProductToOrderController.run(req, res));
};