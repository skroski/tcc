/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const budgets_module_1 = __webpack_require__("./apps/api/src/app/budgets/budgets.module.ts");
const clients_module_1 = __webpack_require__("./apps/api/src/app/clients/clients.module.ts");
const services_module_1 = __webpack_require__("./apps/api/src/app/services/services.module.ts");
const users_module_1 = __webpack_require__("./apps/api/src/app/users/users.module.ts");
const serve_static_1 = __webpack_require__("@nestjs/serve-static");
const path_1 = __webpack_require__("path");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            // BEGIN INSERT
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'eagency'),
                exclude: ['/api*']
            }),
            // END INSERT               
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule.forRoot()],
                inject: [config_1.ConfigService],
                useFactory: (config) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                    return ({
                        uri: config.get('MONGODB_URI'),
                    });
                })
            }),
            budgets_module_1.BudgetsModule,
            services_module_1.ServicesModule,
            users_module_1.UsersModule,
            clients_module_1.ClientsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//MongooseModule.forRoot('mongodb://127.0.0.1:27017/tcc')


/***/ }),

/***/ "./apps/api/src/app/authorization/authorization.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorizationModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AuthorizationModule = class AuthorizationModule {
};
AuthorizationModule = tslib_1.__decorate([
    (0, common_1.Module)({})
], AuthorizationModule);
exports.AuthorizationModule = AuthorizationModule;


/***/ }),

/***/ "./apps/api/src/app/budgets/budgets.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BudgetsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const budgets_service_1 = __webpack_require__("./apps/api/src/app/budgets/budgets.service.ts");
const create_budget_dto_1 = __webpack_require__("./apps/api/src/app/budgets/dto/create-budget.dto.ts");
let BudgetsController = class BudgetsController {
    constructor(budgetsService) {
        this.budgetsService = budgetsService;
    }
    create(createBudgetDto) {
        return this.budgetsService.create(createBudgetDto);
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.budgetsService.findAll();
        });
    }
    findOne(budgetID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.budgetsService.findOne(budgetID);
        });
    }
    update(budgetID, newService) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.budgetsService.update(budgetID, newService);
        });
    }
    remove(budgetID) {
        return this.budgetsService.remove(budgetID);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criação de Orçamento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Insere um Orçamento' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Orçamento não foi inserido.' }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof create_budget_dto_1.CreateBudgetDto !== "undefined" && create_budget_dto_1.CreateBudgetDto) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BudgetsController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Consulta de todos os Orçamentos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta de todos os Orçamentos.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Orçamentos não encontrados.' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], BudgetsController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':budgetID'),
    (0, swagger_1.ApiOperation)({ summary: 'Consulta de Orçamento por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta de Orçamento por ID.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Orçamento não encontrado.' }),
    tslib_1.__param(0, (0, common_1.Param)('budgetID')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetsController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':budgetID'),
    (0, swagger_1.ApiOperation)({ summary: 'Alteração de Orçamento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alteração de Orçamento .' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Não foi possível alterar o Orçamento.' }),
    tslib_1.__param(0, (0, common_1.Param)('budgetID')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_c = typeof create_budget_dto_1.CreateBudgetDto !== "undefined" && create_budget_dto_1.CreateBudgetDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], BudgetsController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':budgetID'),
    (0, swagger_1.ApiOperation)({ summary: 'Exlusão de Orçamento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Exclusão de Orçamento.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Orçamento não exlcuido.' }),
    tslib_1.__param(0, (0, common_1.Param)('budgetID')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], BudgetsController.prototype, "remove", null);
BudgetsController = tslib_1.__decorate([
    (0, common_1.Controller)('budgets'),
    (0, swagger_1.ApiTags)('budgets'),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof budgets_service_1.BudgetsService !== "undefined" && budgets_service_1.BudgetsService) === "function" ? _e : Object])
], BudgetsController);
exports.BudgetsController = BudgetsController;


/***/ }),

/***/ "./apps/api/src/app/budgets/budgets.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BudgetsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const budgets_controller_1 = __webpack_require__("./apps/api/src/app/budgets/budgets.controller.ts");
const budgets_service_1 = __webpack_require__("./apps/api/src/app/budgets/budgets.service.ts");
const budget_schema_1 = __webpack_require__("./apps/api/src/app/budgets/entities/budget.schema.ts");
const budget_repository_1 = __webpack_require__("./apps/api/src/app/budgets/repositories/budget.repository.ts");
let BudgetsModule = class BudgetsModule {
};
BudgetsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'budgets', schema: budget_schema_1.BudgetSchema }])
        ],
        controllers: [budgets_controller_1.BudgetsController],
        providers: [budgets_service_1.BudgetsService, budget_repository_1.BudgetRepository]
    })
], BudgetsModule);
exports.BudgetsModule = BudgetsModule;


/***/ }),

/***/ "./apps/api/src/app/budgets/budgets.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BudgetsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const budget_repository_1 = __webpack_require__("./apps/api/src/app/budgets/repositories/budget.repository.ts");
let BudgetsService = class BudgetsService {
    constructor(budgetRepository) {
        this.budgetRepository = budgetRepository;
    }
    create(newBudget) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const createdBudget = yield this.budgetRepository.saveBudget(newBudget);
            return createdBudget;
        });
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const allBudgets = yield this.budgetRepository.getAllBudgets();
            if (!allBudgets.length)
                throw new common_1.BadRequestException('Não temos budgets registrados');
            else
                return allBudgets;
        });
    }
    findOne(budgetID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const existBudget = yield this.budgetRepository.getBudgetByID(budgetID);
                if (!existBudget)
                    throw new common_1.BadRequestException(`Este serviço que tentou buscar não existe`);
                return existBudget;
            }
            catch (e) {
                throw new common_1.BadRequestException(`Este serviço que tentou buscar não existe`);
            }
        });
    }
    update(budgetID, newBudget) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const existBudget = yield this.budgetRepository.getBudgetByID(budgetID);
            if (!existBudget)
                throw new common_1.BadRequestException(`Este serviço que tentou alterar não existe`);
            const updatedBudget = yield this.budgetRepository.updateBudgetByID(budgetID, newBudget);
            if (updatedBudget)
                return this.budgetRepository.getBudgetByID(budgetID);
            else
                throw new common_1.BadRequestException("Tivemos um problema com a atualização do serviço");
        });
    }
    remove(budgetID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const existBudget = yield this.budgetRepository.deleteBudgetByID(budgetID);
                if (!existBudget)
                    throw new common_1.BadRequestException(`Este serviço que tentou excluir não existe`);
                return existBudget;
            }
            catch (e) {
                throw new common_1.BadRequestException(`Este serviço que tentou excluir não existe`);
            }
        });
    }
};
BudgetsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof budget_repository_1.BudgetRepository !== "undefined" && budget_repository_1.BudgetRepository) === "function" ? _a : Object])
], BudgetsService);
exports.BudgetsService = BudgetsService;


/***/ }),

/***/ "./apps/api/src/app/budgets/dto/create-budget.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBudgetDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const class_transformer_1 = __webpack_require__("class-transformer");
//import { UsersDTO } from "../../users/dto/create-user.dto";
//import { CreateClientDTO } from "../../clients/dto/create-client.dto";
const create_service_dto_1 = __webpack_require__("./apps/api/src/app/services/dto/create-service.dto.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class CreateBudgetDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateBudgetDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.MaxLength)(150),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateBudgetDto.prototype, "excerpt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_service_dto_1.ServiceDTO),
    (0, class_validator_1.ArrayMinSize)(1)
    //@IsNotEmptyObject({ each : true})
    ,
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Array)
], CreateBudgetDto.prototype, "services", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(50),
    (0, class_validator_1.MaxLength)(250),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateBudgetDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Number)
], CreateBudgetDto.prototype, "price", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(30),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateBudgetDto.prototype, "type", void 0);
exports.CreateBudgetDto = CreateBudgetDto;


/***/ }),

/***/ "./apps/api/src/app/budgets/entities/budget.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BudgetSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const service_schema_1 = __webpack_require__("./apps/api/src/app/services/entities/service.schema.ts");
exports.BudgetSchema = new mongoose_1.Schema({
    title: String,
    services: [service_schema_1.ServiceSchema],
    excerpt: String,
    description: String,
    totalhours: Number,
    totalprice: Number,
    type: String
});


/***/ }),

/***/ "./apps/api/src/app/budgets/repositories/budget.repository.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BudgetRepository = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let BudgetRepository = class BudgetRepository {
    constructor(budgetModel) {
        this.budgetModel = budgetModel;
    }
    saveBudget(newBudget) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const createdBudget = new this.budgetModel(newBudget);
            return yield createdBudget.save();
        });
    }
    getAllBudgets() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.budgetModel.find({}, { __v: false }).sort({ name: +1 }).exec();
        });
    }
    getBudgetByID(budgetID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.budgetModel.findById({ _id: budgetID });
        });
    }
    deleteBudgetByID(budgetID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.budgetModel.findOneAndDelete({ _id: budgetID });
        });
    }
    updateBudgetByID(budgetID, newBudget) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.budgetModel.replaceOne({ _id: budgetID }, newBudget);
        });
    }
};
BudgetRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('budgets')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], BudgetRepository);
exports.BudgetRepository = BudgetRepository;


/***/ }),

/***/ "./apps/api/src/app/clients/clients.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const clients_service_1 = __webpack_require__("./apps/api/src/app/clients/clients.service.ts");
const create_client_dto_1 = __webpack_require__("./apps/api/src/app/clients/dto/create-client.dto.ts");
const update_client_dto_1 = __webpack_require__("./apps/api/src/app/clients/dto/update-client.dto.ts");
let ClientsController = class ClientsController {
    constructor(clientsService) {
        this.clientsService = clientsService;
    }
    create(createClientDto) {
        return this.clientsService.create(createClientDto);
    }
    findAll() {
        return this.clientsService.findAll();
    }
    findOne(id) {
        return this.clientsService.findOne(id);
    }
    update(id, updateClientDto) {
        return this.clientsService.update(id, updateClientDto);
    }
    remove(id) {
        return this.clientsService.remove(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criação de Cliente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Insere um Cliente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Cliente não foi inserido.' }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof create_client_dto_1.CreateClientDTO !== "undefined" && create_client_dto_1.CreateClientDTO) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ClientsController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Consulta de todos os Clientes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta de todos os Clientes.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Clientes não encontrados.' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ClientsController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Consulta de Cliente por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta de Cliente por ID.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Cliente não encontrado.' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ClientsController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Alteração de Cliente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alteração de Cliente .' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Não foi possível alterar o Cliente.' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_b = typeof update_client_dto_1.UpdateClientDto !== "undefined" && update_client_dto_1.UpdateClientDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ClientsController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Exlusão de Cliente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Exclusão de Cliente.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Cliente não exlcuido.' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ClientsController.prototype, "remove", null);
ClientsController = tslib_1.__decorate([
    (0, common_1.Controller)('clients'),
    (0, swagger_1.ApiTags)('clients'),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof clients_service_1.ClientsService !== "undefined" && clients_service_1.ClientsService) === "function" ? _c : Object])
], ClientsController);
exports.ClientsController = ClientsController;


/***/ }),

/***/ "./apps/api/src/app/clients/clients.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const clients_service_1 = __webpack_require__("./apps/api/src/app/clients/clients.service.ts");
const clients_controller_1 = __webpack_require__("./apps/api/src/app/clients/clients.controller.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const client_entity_1 = __webpack_require__("./apps/api/src/app/clients/entities/client.entity.ts");
const client_schema_1 = __webpack_require__("./apps/api/src/app/clients/entities/client.schema.ts");
const authorization_module_1 = __webpack_require__("./apps/api/src/app/authorization/authorization.module.ts");
const config_1 = __webpack_require__("@nestjs/config");
let ClientsModule = class ClientsModule {
};
ClientsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: client_entity_1.Client.name, schema: client_schema_1.ClientSchema }]),
            authorization_module_1.AuthorizationModule, config_1.ConfigModule.forRoot()
        ],
        controllers: [clients_controller_1.ClientsController],
        providers: [clients_service_1.ClientsService]
    })
], ClientsModule);
exports.ClientsModule = ClientsModule;


/***/ }),

/***/ "./apps/api/src/app/clients/clients.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const client_entity_1 = __webpack_require__("./apps/api/src/app/clients/entities/client.entity.ts");
let ClientsService = class ClientsService {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }
    create(createClientDTO) {
        return this.clientModel.create(createClientDTO);
    }
    findAll() {
        return this.clientModel.find().exec();
    }
    findOne(id) {
        return this.clientModel.findById(id).exec();
    }
    update(id, updateClientDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.clientModel.updateOne({ _id: id }, updateClientDto).exec();
            return this.clientModel.findById(id).exec();
        });
    }
    remove(id) {
        this.clientModel.deleteOne({ _id: id });
    }
};
ClientsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)(client_entity_1.Client.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ClientsService);
exports.ClientsService = ClientsService;


/***/ }),

/***/ "./apps/api/src/app/clients/dto/create-client.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateClientDTO = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_validator_1 = __webpack_require__("class-validator");
class CreateClientDTO {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "user", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "mobile", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "cpf", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "cnpj", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(200),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "razaosocial", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "cep", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(250),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "address", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "budget", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CreateClientDTO.prototype, "typecustomer", void 0);
exports.CreateClientDTO = CreateClientDTO;


/***/ }),

/***/ "./apps/api/src/app/clients/dto/update-client.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateClientDto = void 0;
const mapped_types_1 = __webpack_require__("@nestjs/mapped-types");
const create_client_dto_1 = __webpack_require__("./apps/api/src/app/clients/dto/create-client.dto.ts");
class UpdateClientDto extends (0, mapped_types_1.PartialType)(create_client_dto_1.CreateClientDTO) {
}
exports.UpdateClientDto = UpdateClientDto;


/***/ }),

/***/ "./apps/api/src/app/clients/entities/client.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Client = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
let Client = class Client {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "user", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "email", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "mobile", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "cpf", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "cnpj", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "razaosocial", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "cep", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "address", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "budgets", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "typecustomer", void 0);
Client = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Client);
exports.Client = Client;


/***/ }),

/***/ "./apps/api/src/app/clients/entities/client.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
exports.ClientSchema = new mongoose_1.Schema({
    user: String,
    name: String,
    email: String,
    mobile: String,
    cpf: String,
    cnpj: String,
    razaosocial: String,
    cep: String,
    address: String,
    budget: String,
    typecustomer: String,
});


/***/ }),

/***/ "./apps/api/src/app/services/dto/create-service.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceDTO = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_validator_1 = __webpack_require__("class-validator");
const create_user_dto_1 = __webpack_require__("./apps/api/src/app/users/dto/create-user.dto.ts");
const class_transformer_1 = __webpack_require__("class-transformer");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class ServiceDTO {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ServiceDTO.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.MaxLength)(150),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ServiceDTO.prototype, "excerpt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_user_dto_1.UsersDTO),
    (0, class_validator_1.ArrayMinSize)(1)
    //@IsNotEmptyObject({ each : true})
    ,
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Array)
], ServiceDTO.prototype, "users", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(50),
    (0, class_validator_1.MaxLength)(250),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ServiceDTO.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Number)
], ServiceDTO.prototype, "price", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(30),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], ServiceDTO.prototype, "type", void 0);
exports.ServiceDTO = ServiceDTO;


/***/ }),

/***/ "./apps/api/src/app/services/entities/service.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const user_schema_1 = __webpack_require__("./apps/api/src/app/services/entities/user.schema.ts");
exports.ServiceSchema = new mongoose_1.Schema({
    name: String,
    users: [user_schema_1.UserSchema],
    excerpt: String,
    description: String,
    price: Number,
    type: String
});


/***/ }),

/***/ "./apps/api/src/app/services/entities/user.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    surname: String,
});


/***/ }),

/***/ "./apps/api/src/app/services/repositories/service.repository.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceRepository = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let ServiceRepository = class ServiceRepository {
    constructor(serviceModel) {
        this.serviceModel = serviceModel;
    }
    saveService(newService) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const createdService = new this.serviceModel(newService);
            return yield createdService.save();
        });
    }
    getAllServices() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.serviceModel.find({}, { __v: false }).sort({ name: +1 }).exec();
        });
    }
    getServiceByID(serviceID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.serviceModel.findById({ _id: serviceID });
        });
    }
    deleteServiceByID(serviceID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.serviceModel.findOneAndDelete({ _id: serviceID });
        });
    }
    updateServiceByID(serviceID, newService) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.serviceModel.replaceOne({ _id: serviceID }, newService);
        });
    }
    getServicesByUserName(userName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.serviceModel.find({
                $or: [
                    { "users.name": { $in: userName } },
                    { "users.surname": { $in: userName } }
                ]
            });
        });
    }
};
ServiceRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('services')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ServiceRepository);
exports.ServiceRepository = ServiceRepository;


/***/ }),

/***/ "./apps/api/src/app/services/services.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const services_service_1 = __webpack_require__("./apps/api/src/app/services/services.service.ts");
const create_service_dto_1 = __webpack_require__("./apps/api/src/app/services/dto/create-service.dto.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
let ServicesController = class ServicesController {
    constructor(servicesService) {
        this.servicesService = servicesService;
    }
    create(createServiceDto) {
        return this.servicesService.create(createServiceDto);
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.servicesService.findAll();
        });
    }
    findOne(serviceID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.servicesService.findOne(serviceID);
        });
    }
    getServicesByUserName(userName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.servicesService.getServicesByUserName(userName);
        });
    }
    update(serviceID, newService) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.servicesService.update(serviceID, newService);
        });
    }
    remove(serviceID) {
        return this.servicesService.remove(serviceID);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criação de serviço' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Insere um serviço' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviço não foi inserido.' }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof create_service_dto_1.ServiceDTO !== "undefined" && create_service_dto_1.ServiceDTO) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Consulta de todos os serviços' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta de todos os serviços.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviços não encontrados.' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ServicesController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':serviceID'),
    (0, swagger_1.ApiOperation)({ summary: 'Consulta de serviço por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta de serviço por ID.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviço não encontrado.' }),
    tslib_1.__param(0, (0, common_1.Param)('serviceID')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicesController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Get)('users/:userName'),
    (0, swagger_1.ApiOperation)({ summary: 'Consulta de serviço por Usuário' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta de serviço por Usuário.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviço não encontrado.' }),
    tslib_1.__param(0, (0, common_1.Param)('userName')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicesController.prototype, "getServicesByUserName", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':serviceID'),
    (0, swagger_1.ApiOperation)({ summary: 'Alteração de serviço' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alteração de serviço .' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Não foi possível alterar o Serviço.' }),
    tslib_1.__param(0, (0, common_1.Param)('serviceID')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_c = typeof create_service_dto_1.ServiceDTO !== "undefined" && create_service_dto_1.ServiceDTO) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ServicesController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':serviceID'),
    (0, swagger_1.ApiOperation)({ summary: 'Exlusão de Serviço' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Exclusão de Serviço.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviço não exlcuido.' }),
    tslib_1.__param(0, (0, common_1.Param)('serviceID')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ServicesController.prototype, "remove", null);
ServicesController = tslib_1.__decorate([
    (0, common_1.Controller)('services'),
    (0, swagger_1.ApiTags)('services'),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof services_service_1.ServicesService !== "undefined" && services_service_1.ServicesService) === "function" ? _e : Object])
], ServicesController);
exports.ServicesController = ServicesController;


/***/ }),

/***/ "./apps/api/src/app/services/services.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const services_service_1 = __webpack_require__("./apps/api/src/app/services/services.service.ts");
const services_controller_1 = __webpack_require__("./apps/api/src/app/services/services.controller.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const service_schema_1 = __webpack_require__("./apps/api/src/app/services/entities/service.schema.ts");
const service_repository_1 = __webpack_require__("./apps/api/src/app/services/repositories/service.repository.ts");
let ServicesModule = class ServicesModule {
};
ServicesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'services', schema: service_schema_1.ServiceSchema }])
        ],
        controllers: [services_controller_1.ServicesController],
        providers: [services_service_1.ServicesService, service_repository_1.ServiceRepository]
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;


/***/ }),

/***/ "./apps/api/src/app/services/services.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const service_repository_1 = __webpack_require__("./apps/api/src/app/services/repositories/service.repository.ts");
let ServicesService = class ServicesService {
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
    }
    create(newService) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const createdService = yield this.serviceRepository.saveService(newService);
            return createdService;
        });
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const allServices = yield this.serviceRepository.getAllServices();
            if (!allServices.length)
                throw new common_1.BadRequestException('Não temos serviços registrados');
            else
                return allServices;
        });
    }
    findOne(serviceID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const existService = yield this.serviceRepository.getServiceByID(serviceID);
                if (!existService)
                    throw new common_1.BadRequestException(`Este serviço que tentou buscar não existe`);
                return existService;
            }
            catch (e) {
                throw new common_1.BadRequestException(`Este serviço que tentou buscar não existe`);
            }
        });
    }
    update(serviceID, newService) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const existService = yield this.serviceRepository.getServiceByID(serviceID);
            if (!existService)
                throw new common_1.BadRequestException(`Este serviço que tentou alterar não existe`);
            const updatedService = yield this.serviceRepository.updateServiceByID(serviceID, newService);
            if (updatedService)
                return this.serviceRepository.getServiceByID(serviceID);
            else
                throw new common_1.BadRequestException("Tivemos um problema com a atualização do serviço");
        });
    }
    remove(serviceID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const existService = yield this.serviceRepository.deleteServiceByID(serviceID);
                if (!existService)
                    throw new common_1.BadRequestException(`Este serviço que tentou excluir não existe`);
                return existService;
            }
            catch (e) {
                throw new common_1.BadRequestException(`Este serviço que tentou excluir não existe`);
            }
        });
    }
    getServicesByUserName(userName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const splitedUserName = userName.split(' ');
            const foundServices = yield this.serviceRepository.getServicesByUserName(splitedUserName);
            if (!foundServices.length)
                return foundServices;
            else
                throw new common_1.BadRequestException("Não encontramos serviços para este usuário");
        });
    }
};
ServicesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof service_repository_1.ServiceRepository !== "undefined" && service_repository_1.ServiceRepository) === "function" ? _a : Object])
], ServicesService);
exports.ServicesService = ServicesService;


/***/ }),

/***/ "./apps/api/src/app/users/dto/create-user.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersDTO = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_validator_1 = __webpack_require__("class-validator");
class UsersDTO {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiPropertyOptional)(),
    tslib_1.__metadata("design:type", String)
], UsersDTO.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UsersDTO.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UsersDTO.prototype, "email", void 0);
exports.UsersDTO = UsersDTO;


/***/ }),

/***/ "./apps/api/src/app/users/dto/update-user.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const mapped_types_1 = __webpack_require__("@nestjs/mapped-types");
const create_user_dto_1 = __webpack_require__("./apps/api/src/app/users/dto/create-user.dto.ts");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.UsersDTO) {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./apps/api/src/app/users/entities/user.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
let UserEntity = class UserEntity {
    constructor(user) {
        this.name = user === null || user === void 0 ? void 0 : user.name;
        this.email = user === null || user === void 0 ? void 0 : user.email;
        this.password = user === null || user === void 0 ? void 0 : user.password;
    }
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
UserEntity = tslib_1.__decorate([
    (0, mongoose_1.Schema)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Partial !== "undefined" && Partial) === "function" ? _a : Object])
], UserEntity);
exports.UserEntity = UserEntity;


/***/ }),

/***/ "./apps/api/src/app/users/users.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const users_service_1 = __webpack_require__("./apps/api/src/app/users/users.service.ts");
const create_user_dto_1 = __webpack_require__("./apps/api/src/app/users/dto/create-user.dto.ts");
const update_user_dto_1 = __webpack_require__("./apps/api/src/app/users/dto/update-user.dto.ts");
//import { AuthorizationGuard } from '../authorization.guard';
const swagger_1 = __webpack_require__("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    // @UseGuards(AuthorizationGuard)
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.findAll();
        });
    }
    create(createUserDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.create(createUserDto);
        });
    }
    findOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.findOne(id);
        });
    }
    update(id, updateUserDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.update(id, updateUserDto);
        });
    }
    deleteOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.deleteOne(id);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta de todos os usuários.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuários não encontrados.' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Novo usuário criado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Rota inválida' }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof create_user_dto_1.UsersDTO !== "undefined" && create_user_dto_1.UsersDTO) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Dados do usuário retornado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Rota inválida' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuário alterado com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuário não encontrado' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_b = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Usuário removido com sucesso' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuário não encontrado' }),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "deleteOne", null);
UsersController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _c : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/api/src/app/users/users.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const users_service_1 = __webpack_require__("./apps/api/src/app/users/users.service.ts");
const users_controller_1 = __webpack_require__("./apps/api/src/app/users/users.controller.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const user_entity_1 = __webpack_require__("./apps/api/src/app/users/entities/user.entity.ts");
const user_schema_1 = __webpack_require__("./apps/api/src/app/services/entities/user.schema.ts");
const authorization_module_1 = __webpack_require__("./apps/api/src/app/authorization/authorization.module.ts");
const config_1 = __webpack_require__("@nestjs/config");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_entity_1.UserEntity.name, schema: user_schema_1.UserSchema }]),
            authorization_module_1.AuthorizationModule, config_1.ConfigModule.forRoot()
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/api/src/app/users/users.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const user_entity_1 = __webpack_require__("./apps/api/src/app/users/entities/user.entity.ts");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    create(createUserDto) {
        return this.userModel.create(createUserDto);
    }
    findAll() {
        return this.userModel.find().exec();
    }
    findOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findById(id).exec();
        });
    }
    update(id, updateUserDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.userModel.updateOne({ _id: id }, updateUserDto).exec();
            return this.userModel.findById(id).exec();
        });
    }
    deleteOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.userModel.deleteOne({ _id: id });
        });
    }
};
UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)(user_entity_1.UserEntity.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mapped-types":
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/serve-static":
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "class-transformer":
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const config = new swagger_1.DocumentBuilder()
            .setTitle('TCC com NX')
            .setDescription('TCC com NX')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://eagencyapp.herokuapp.com/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map