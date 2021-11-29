export interface ISendMail {
    from: string;
    subject: string;
    html: string
}

export default interface ISendMailRepository {
    sendMail(data: any): Promise<void>
}

