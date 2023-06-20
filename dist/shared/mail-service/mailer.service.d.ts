export declare class MailerService {
    private transporter;
    constructor();
    sendEmail(to: string, subject: string, content: string, from?: string): Promise<void>;
}
