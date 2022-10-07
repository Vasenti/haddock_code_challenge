import { Router } from "express";
import glob from 'glob';

export const registerRoutes = (router: Router) => {
    const routes = glob.sync(__dirname + '/**/*.route.*');
    console.log(routes)
    routes.map(route => register(route, router));
}

const register = (routePath: string, router: Router) => {
    console.log(routePath)
    const route = require(routePath);
    route.register(router);
}