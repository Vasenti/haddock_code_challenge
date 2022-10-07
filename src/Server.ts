import { json } from 'body-parser';
import express, { Request, Response, Router } from 'express';
import * as http from 'http'
import { registerRoutes } from './routes';

export class Server {
    private express: express.Express;
    private port: string;
    private httpServer?: http.Server;

    constructor(port: string){
        this.port = port;
        this.express = express();
        this.express.use(json());

        const router = Router();
        this.express.use(router);

        registerRoutes(router);
    }

    async listen(): Promise<void> {
        return new Promise(resolve => {
            this.httpServer = this.express.listen(this.port, () => {
                console.log(
                    `OrderApp is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
                );
                console.log('Press CTRL-C to stop\n');
                resolve();
            })
        })
    }

    getHttpServer(){
        return this.httpServer;
    }

    async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if(this.httpServer){
                this.httpServer.close(error => {
                    if( error ) return reject(error);
                    return resolve();
                })
            }
            return resolve();
        })
    }
}