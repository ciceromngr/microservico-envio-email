import express from 'express'
import { senMailController } from './app/useCases';


class App {

    public app;

    constructor() {
        this.app = express()

        this.middlewares()
        this.router()
    }

    middlewares() {
        this.app.use(express.json())
    }

    router() {
        this.app.post('/sendMail', senMailController.sendMail)
    }

}

export default new App().app