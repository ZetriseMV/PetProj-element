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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./router/router"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', router_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (DB_URL) {
            yield mongoose_1.default
                .connect(DB_URL)
                .then(() => console.log('DB is running'))
                .catch((err) => console.log(err));
        }
        else {
            console.log('DB_URL is undefined');
        }
        app.listen(PORT, () => {
            console.log(`server is started on PORT ${PORT}`);
        });
    }
    catch (err) {
        console.log(err);
    }
});
start();
//# sourceMappingURL=index.js.map