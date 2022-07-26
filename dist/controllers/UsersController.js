"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const User_1 = require("@models/User");
class UsersController {
    get() {
        const user = new User_1.User();
    }
}
exports.UsersController = UsersController;
