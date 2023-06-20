import { UserRole } from '../enum/role.enum';
export declare class CreateStuffDto {
    password: string;
    email: string;
    role?: UserRole;
    restaurent: string;
}
