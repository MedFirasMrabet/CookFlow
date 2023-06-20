"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const user_schema_1 = require("./user/user.schema");
const user_service_1 = require("./user/user.service");
const mailer_service_1 = require("../shared/mail-service/mailer.service");
let AuthService = class AuthService {
    constructor(userModel, jwtService, userService, mailerService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.userService = userService;
        this.mailerService = mailerService;
    }
    async validateUser(email, password) {
        const user = await this.userModel.findOne({ email }).select('+password');
        if (user && (await bcrypt.compare(password, user.password))) {
            return user.toObject({ versionKey: false, getters: true });
        }
        throw new common_1.UnauthorizedException();
    }
    async login(user) {
        const login = await this.validateUser(user.email, user.password);
        const payload = { email: login.email, sub: login._id, role: login.role, restaurent: login.restaurent };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async addStuff(createStuffDto) {
        const hashedPassword = await bcrypt.hash(createStuffDto.password, 10);
        const user = await this.userModel.create({ email: createStuffDto.email, password: hashedPassword, role: createStuffDto.role, restaurent: createStuffDto.restaurent });
        if (user) {
            console.log(user, 'user');
            this.sendEmailAddStuff(user);
            return { user };
        }
        return null;
    }
    async addAdmin(createStuffDto) {
        const hashedPassword = await bcrypt.hash(createStuffDto.password, 10);
        const user = await this.userModel.create({ email: createStuffDto.email, password: hashedPassword, role: createStuffDto.role });
        if (user) {
            this.sendEmailAddStuff(user);
            return { user };
        }
        return null;
    }
    async findAll() {
        return await this.userService.findAll();
    }
    async findAllByRestaurent(restaurent) {
        return await this.userService.findAllByRestaurent(restaurent);
    }
    async changePassword(changePasswordDto) {
        const login = await this.validateUser(changePasswordDto.email, changePasswordDto.password);
        if (login) {
            const hashedPassword = await bcrypt.hash(changePasswordDto.newPassword, 10);
            const newUser = this.userService.update(changePasswordDto.email, { password: hashedPassword });
            if (newUser) {
                return newUser;
            }
            return null;
        }
        return null;
    }
    async sendEmailAddStuff(user) {
        const content = `email : ${user.email} \n password : 123123123 \n veuillez changer votre mot de passe link Application :   `;
        this.mailerService.sendEmail(user.email, '[Activation de compte CooK FloW]', content);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        user_service_1.UserService,
        mailer_service_1.MailerService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map