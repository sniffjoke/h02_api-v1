"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getController = void 0;
const blogsRepository_1 = require("../blogsRepository");
const getController = (req, res) => {
    // console.log(req.headers.authorization)
    const blogs = blogsRepository_1.blogsRepository.getAll();
    res.status(200).json(blogs);
};
exports.getController = getController;
