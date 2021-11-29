import { MailRepository } from "./implementations/MailRepository"

export class SendMailService {
    async sendMail(data: any) {
        const sendRepository = new MailRepository()
        await sendRepository.sendMail(data)
    }

}