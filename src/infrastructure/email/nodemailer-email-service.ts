import { IEmailService, Message } from '@use-cases/user/ports/email-service'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import 'dotenv/config'

export class NodemailerEmailService implements IEmailService {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  }

  async send(message: Message): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}
