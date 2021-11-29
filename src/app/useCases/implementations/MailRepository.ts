import 'dotenv/config'
import Mail from '../../Mail/Mail';
import ISendMailRepository from "../SendMailRepository";

class MailRepository implements ISendMailRepository {
    async sendMail(data: any): Promise<void> {
        await Mail.sendMail({
            to: 'Empresa X <empresax@gmail.com>',
            from: data.from,
            subject: data.subject,
            html: data.html
        })
    }
}

export { MailRepository }