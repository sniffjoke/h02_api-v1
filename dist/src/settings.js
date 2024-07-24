"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTINGS = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.SETTINGS = {
    PORT: process.env.PORT || 3003,
    PATH: {
        // VIDEOS: '/api/videos',
        // TESTING: '/api/testing/all-data',
        BLOGS: '/api/blogs',
        ADMIN: process.env.ADMIN || 'admin:qwerty',
    }
};
