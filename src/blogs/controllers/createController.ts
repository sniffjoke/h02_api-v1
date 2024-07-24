import {blogsRepository} from "../blogsRepository";
import {Request, Response} from "express";
import {db} from "../../../db/db";


export const createController = (req: Request, res: Response) => {
    const newBlog = blogsRepository.createBlog({...req.body});
    db.blogs = [...db.blogs, newBlog];
    res.status(201).json(newBlog)
}
