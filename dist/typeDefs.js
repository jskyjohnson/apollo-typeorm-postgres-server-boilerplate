"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  type Query {
    getUser(id: Int!): User
  }
  type Mutation {
    addUser(firstName: String!, lastName: String, age: Int!): Boolean!
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    age: Int!
  }
`;
//# sourceMappingURL=typeDefs.js.map