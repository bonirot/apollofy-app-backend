"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const config_1 = __importDefault(require("../src/config/config"));
const PORT = config_1.default.app.PORT;
server_1.default.listen(PORT, () => {
    console.log(`Server is on FIRE🔥 on port ${PORT}
Database is connected to ${config_1.default.db.URI}`);
});
