"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const ProductsSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    firsLine: {
        type: String,
        required: true,
    },
    secondLine: {
        type: String,
        required: true,
    },
    thirdLine: {
        type: String,
        required: true,
    },
    fourthLine: {
        type: String,
        required: true,
    },
    fifthLine: {
        type: String,
        required: true,
    },
    sixthLine: {
        type: String,
        required: true,
    },
    seventhLine: {
        type: String,
        required: true,
    },
    eighthLine: {
        type: String,
        required: true,
    },
    ninethLine: {
        type: String,
        required: false,
    },
    tenthLine: {
        type: String,
        required: false,
    },
    eleventhLine: {
        type: String,
        required: false,
    },
    twelfthLine: {
        type: String,
        required: false,
    },
    nameProduct: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    heat: {
        type: Boolean,
        required: false,
    },
    new: {
        type: Boolean,
        required: false,
    },
    image: {
        type: String,
        required: true,
    },
    __v: {
        type: Number,
        required: true,
    }
});
exports.default = mongoose.model('categoriesProducts', ProductsSchema);
//# sourceMappingURL=categoriesProducts.js.map