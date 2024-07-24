import {blogsRepository} from "../blogsRepository";
import {Request, Response} from "express";


export const getController = (req: Request, res: Response) => {
    const blogs = blogsRepository.getAll()
    res.status(200).json(blogs)
}
