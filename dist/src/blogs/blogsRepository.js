"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRepository = void 0;
const db_1 = require("../../db/db");
exports.blogsRepository = {
    getAll() {
        return db_1.db.blogs.map(p => p);
    },
    create(blog) {
        const newBlog = {
            id: new Date().toISOString() + Math.random().toString(36),
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl
        };
    }
};
