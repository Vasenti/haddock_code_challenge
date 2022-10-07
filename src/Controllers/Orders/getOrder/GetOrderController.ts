import { Request, Response } from "express-serve-static-core";
import { GetOrderHandler } from "../../../Contexts/Orders/application/getOrder/GetOrderHandler";
import { Order } from "../../../Contexts/Orders/domain/Order";

export class GetOrderController {
    constructor() {}

    public run(req: Request, res: Response){
        console.log(req.params);
        const getOrderHandler = new GetOrderHandler();
        const order = getOrderHandler.handle(parseInt(req.params.id));
        res.status(200).json(order).end();
    }
}