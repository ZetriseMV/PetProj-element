"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categ_info_controller_1 = __importDefault(require("../controller/categ-info-controller"));
const productsCategories_contorller_1 = __importDefault(require("../controller/productsCategories-contorller"));
const router = (0, express_1.Router)();
router.get('/infonavigate', categ_info_controller_1.default.getInfoNavigate);
router.get('/getCategoryElelements', productsCategories_contorller_1.default.getProductsWfilter);
exports.default = router;
//# sourceMappingURL=router.js.map