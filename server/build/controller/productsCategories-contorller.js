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
const infoData_service_1 = __importDefault(require("../services/infoData-service"));
class ProductCategoriesController {
    constructor() {
        this.getProductsWfilter = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { queryFilter } = req.query;
                const products = yield infoData_service_1.default.getInfoProductsWfilter(queryFilter);
                res.status(200).json(products);
            }
            catch (err) {
                console.log(err);
                res.status(404).json({
                    err,
                    status: false
                });
            }
        });
        this.getObjectMainPage = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const objectProductsMainPage = yield infoData_service_1.default.getProductsOnMainPage();
                if (objectProductsMainPage) {
                    res.json(objectProductsMainPage);
                }
            }
            catch (err) {
                console.log(err);
                res.status(404).json({
                    err,
                    status: false
                });
            }
        });
    }
}
exports.default = new ProductCategoriesController;
//# sourceMappingURL=productsCategories-contorller.js.map