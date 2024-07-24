import {blogsRepository} from "../blogsRepository";
import {Request, Response} from "express";


export const getController = (req: Request, res: Response) => {
    // console.log(req.headers.authorization)
    const blogs = blogsRepository.getAll()
    res.status(200).json(blogs)
}
