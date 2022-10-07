import { Server } from "./Server";

export class BackendApp {
    server?: Server;

    async start(){
        const port = '5000';
        this.server = new Server(port);
        return this.server.listen();
    }

    get httpServer(){
        return this.server?.getHttpServer();
    }

    async stop(){
        return this.server?.stop();
    }
}