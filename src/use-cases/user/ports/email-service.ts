type Address = {
  email: string
  name: string
}

export type Message = {
  to: Address
  from: Address
  subject: string
  body: string
}

export interface IEmailService {
  send(message: Message): Promise<void>
}
