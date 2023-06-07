import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Set up the transporter with your email service configuration
    this.transporter = nodemailer.createTransport({
      // Configuration options specific to your email service provider
      // For example, if using SMTP:
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'cookflow.plat@gmail.com',
        pass: 'Chopper&Pincky27',
      },
    });
  }

  async sendEmail(to: string, subject: string, content: string,from : string = 'cookflow.plat@gmail.com') {
    const mailOptions: nodemailer.SendMailOptions = {
      from,
      to,
      subject,
      html: content,
    };

    // Send the email using the configured transporter
    await this.transporter.sendMail(mailOptions);
  }
}
