import { Request, Response } from "express";
import { SendMailService } from "./SendMailService";

export default class SendMailController {


    constructor() { }

    async sendMail(req: Request, res: Response) {
        const sendMailService = new SendMailService()
        const { from, subject, html } = req.body

        try {

            await sendMailService.sendMail({ from, subject, html })
            return res.status(200).json({ status: 'Email Enviado com sucesso!' })

        } catch (error) {

            return res.status(400).json({ error: error })

        }

    }

}