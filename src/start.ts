import { BackendApp } from "./BackendApp";

try {
    new BackendApp().start();
} catch (error) {
    console.error('Error al iniciar App', error);
    process.exit(1);
}

process.on('uncaughtException', err => {
    console.log('uncaughtException', err);
    process.exit(1);
})