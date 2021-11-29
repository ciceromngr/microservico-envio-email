import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'
import mailConfig from './mailConfig'

export default nodemailer.createTransport(mailConfig)