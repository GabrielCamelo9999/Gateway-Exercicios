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
var AppController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const criar_registro_dto_1 = require("./dtos/criar-registro-dto");
let AppController = AppController_1 = class AppController {
    getHello() {
        throw new Error('Method not implemented.');
    }
    constructor() {
        this.logger = new common_1.Logger(AppController_1.name);
        this.clienteAdminBackend = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: ['amqp://admin:123456@localhost:5672/arquivoprojetormq'],
                queue: 'admin-backend'
            }
        });
    }
    async criarEmpresa(criarRegistroDto) {
        return await this.clienteAdminBackend.emit('criar-registro', criarRegistroDto);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('registro'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_registro_dto_1.CriarRegistroDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "criarEmpresa", null);
exports.AppController = AppController = AppController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [])
], AppController);
//# sourceMappingURL=app.controller.js.map