import Mail from "../Mail"

export default  {
    key: 'EnvioEmail',
    async handle({data}) {
        await Mail.sendMail({
            to: data.from,
            from: process.env.MAIL_FROM,
            subject: data.subject,
            html: data.html
        })
    }
}