"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
var msg = "";
function createDocumentation(msg) {
    msg += "To get all users: GET localhost:{{port}}/user/";
    msg += "<br/>To get a singleuser: GET localhost:{{port}}/user/:userId";
    msg += "<br/>To create an user: POST localhost:{{port}}/user/create";
    msg += "<br/>To update an user: PUT localhost:{{port}}/user/update/:userId";
    msg += "<br/>To delete an user: DELETE localhost:{{port}}/user/delete/:userId";
    msg += "<br/><br/><br/> Developed by: Caleb Naranjo";
    return msg;
}
let AppService = class AppService {
    getHello() {
        return `${createDocumentation(msg)}`;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map