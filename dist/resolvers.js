"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const User_1 = require("./entity/User");
exports.resolvers = {
    Query: {
        getUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            return yield User_1.User.findOne({ where: { id: id } });
        })
    },
    Mutation: {
        addUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { firstName, lastName, age } = args;
            try {
                const user = User_1.User.create({
                    firstName,
                    lastName,
                    age
                });
                yield user.save();
                return true;
            }
            catch (error) {
                return false;
            }
        })
    }
};
//# sourceMappingURL=resolvers.js.map