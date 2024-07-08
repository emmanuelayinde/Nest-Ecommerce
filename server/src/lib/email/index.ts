import nodemailer from 'nodemailer';
import config from '@config/index';

interface IEmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use TLS
      auth: {
        user: config.EMAIL_USERNAME,
        pass: config.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail({ to, subject, text, html }: IEmailOptions): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: 'Nest Commerce <weeddetect@gmail.com>',
        to,
        subject,
        text,
        html,
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Email could not be sent');
    }
  }
}

export default EmailService;
