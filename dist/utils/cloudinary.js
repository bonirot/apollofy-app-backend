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
exports.deleteAudioCloudinary = exports.deleteImageCloudinary = exports.uploadAudioCloudinary = exports.uploadImageCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const config_1 = __importDefault(require("../config/config"));
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloudinary.cloudinary_name,
    api_key: config_1.default.cloudinary.api_key,
    api_secret: config_1.default.cloudinary.api_secret,
});
const uploadImageCloudinary = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cloudinary_1.v2.uploader.upload(filepath, { folder: 'apollofy' });
});
exports.uploadImageCloudinary = uploadImageCloudinary;
const uploadAudioCloudinary = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cloudinary_1.v2.uploader.upload(filepath, {
        folder: 'apollofy',
        resource_type: 'video',
        format: 'mp3',
    });
});
exports.uploadAudioCloudinary = uploadAudioCloudinary;
const deleteImageCloudinary = (publicId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cloudinary_1.v2.uploader.destroy(publicId);
});
exports.deleteImageCloudinary = deleteImageCloudinary;
const deleteAudioCloudinary = (publicId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cloudinary_1.v2.uploader.destroy(publicId, {
        resource_type: 'video',
    });
});
exports.deleteAudioCloudinary = deleteAudioCloudinary;
