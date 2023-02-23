"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Users';
console.log("mongoDB_URI", MONGODB_URI);
mongoose_1.default.connect(MONGODB_URI, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
// useFindAndModify: false,
});
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
exports.default = db;
//# sourceMappingURL=db.js.map