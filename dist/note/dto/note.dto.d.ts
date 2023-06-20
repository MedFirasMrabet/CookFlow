import { User } from 'src/auth/user/user.schema';
export declare class CreateNoteDto {
    content: string;
    sender: User;
    recipient?: User;
}
