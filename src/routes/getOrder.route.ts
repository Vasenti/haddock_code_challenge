import { Request, Response, Router } from "express";
import { GetOrderController } from "../Controllers/Orders/getOrder/GetOrderController";

export const register = (router: Router) => {
    const getOrderController = new GetOrderController();
    router.get('/order/:id', (req: Request, res: Response) => getOrderController.run(req, res));
};