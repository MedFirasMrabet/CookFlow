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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("./guards/roles.decorator");
const auth_service_1 = require("./auth.service");
const auth_credentials_dto_1 = require("./dto/auth-credentials.dto");
const createStuff_dto_1 = require("./dto/createStuff.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const role_enum_1 = require("./enum/role.enum");
const changePassword_dto_1 = require("./dto/changePassword.dto");
(0, swagger_1.ApiTags)('auth');
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(authCredentialsDto) {
        return await this.authService.login(authCredentialsDto);
    }
    async addAdmin(createStuffDto) {
        return await this.authService.addAdmin(createStuffDto);
    }
    async addStuff(createStuffDto) {
        console.log(createStuffDto, 'createStuffDto');
        return await this.authService.addStuff(createStuffDto);
    }
    async changePassword(changePasswordDto) {
        return await this.authService.changePassword(changePasswordDto);
    }
    async findAll() {
        return await this.authService.findAll();
    }
    async findAllByRestaurent(restaurentId) {
        return await this.authService.findAllByRestaurent(restaurentId['restaurentId']);
    }
    test() {
        return 'Only admin users can see this';
    }
};
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('addAdmin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStuff_dto_1.CreateStuffDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "addAdmin", null);
__decorate([
    (0, common_1.Post)('addStuff'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStuff_dto_1.CreateStuffDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "addStuff", null);
__decorate([
    (0, common_1.Post)('changePassword'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.UserRole.Chef || role_enum_1.UserRole.SousChef || role_enum_1.UserRole.Cook),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [changePassword_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Get)('findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findAllByRestaurent/:restaurentId'),
    (0, swagger_1.ApiParam)({ name: 'restaurentId', required: true }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findAllByRestaurent", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.UserRole.Chef),
    (0, common_1.Post)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AuthController.prototype, "test", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map