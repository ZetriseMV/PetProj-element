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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const groupNavigation_1 = __importDefault(require("../models/groupNavigation"));
const categoriesProducts_1 = __importDefault(require("../models/categoriesProducts"));
class DataService {
    static getInfoNavigateCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const infoNavigationData = yield groupNavigation_1.default.find();
                return infoNavigationData;
            }
            catch (err) {
                return null;
            }
        });
    }
}
_a = DataService;
DataService.getInfoProductsWfilter = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = yield categoriesProducts_1.default.find({ category: filter });
        return productData;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
DataService.getProductsOnMainPage = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = ['smartphones', 'vacuum', 'tv', 'WashMachine', 'HeadPhones', 'Fridge', 'Bake'];
        const productsData = {
            heats: {},
            newItems: {}
        };
        for (const category of categories) {
            const productsHeats = yield categoriesProducts_1.default.find({ category, heat: true });
            const productsNewItems = yield categoriesProducts_1.default.find({ category, new: true });
            productsData.heats[category.toLowerCase()] = productsHeats;
            productsData.newItems[category.toLowerCase()] = productsNewItems;
        }
        return productsData;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.default = DataService;
//# sourceMappingURL=infoData-service.js.map