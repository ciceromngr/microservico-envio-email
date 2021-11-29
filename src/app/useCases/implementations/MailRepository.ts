import 'dotenv/config'
import Queue from '../../Mail/lib/Queue';
import ISendMailRepository from "../SendMailRepository";

class MailRepository implements ISendMailRepository {
    async sendMail(data: any): Promise<void> {
        try {
            await Queue.add('EnvioEmail', data)
            
        } catch (error) {
            console.error();
        }
    }
}

export { MailRepository }