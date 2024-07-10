"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const clientDir = path_1.default.join(__dirname, "../../../client");
const viewsDir = path_1.default.join(__dirname, "../../../client/views");
const createFolders = () => {
    if (!fs_1.default.existsSync(clientDir)) {
        fs_1.default.mkdirSync(clientDir);
    }
    ;
    if (!fs_1.default.existsSync(viewsDir)) {
        fs_1.default.mkdirSync(viewsDir);
    }
};
exports.default = createFolders;
