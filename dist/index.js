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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = require("./typeDefs");
const resolvers_1 = require("./resolvers");
require("dotenv").config();
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new apollo_server_express_1.ApolloServer({ typeDefs: typeDefs_1.typeDefs, resolvers: resolvers_1.resolvers });
    let db_port = parseInt(process.env.db_port);
    yield typeorm_1.createConnection({
        type: "postgres",
        host: process.env.db_host,
        port: db_port,
        username: process.env.db_username,
        password: process.env.db_password,
        database: process.env.db_database,
        entities: ["dist/entity/**/*.js"],
        migrations: ["dist/migration/**/*.js"],
        subscribers: ["dist/subscriber/**/*.js"],
        synchronize: true,
        logging: true
    });
    const app = express_1.default();
    server.applyMiddleware({ app });
    app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
});
startServer();
//# sourceMappingURL=index.js.map