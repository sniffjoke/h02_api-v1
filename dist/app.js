"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import videoRoutes from "./routes/videoRoutes";
// import testingRoutes from "./routes/testingRoutes";
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.get('/', (req, res) => {
    res.status(200).json({ version: '2.0' });
});
// app.get(SETTINGS.PATH.VIDEOS, getVideoController)
// app.use(SETTINGS.PATH.VIDEOS, videoRoutes)
// app.use(SETTINGS.PATH.TESTING, testingRoutes)
