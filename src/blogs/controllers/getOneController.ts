import {blogsRepository} from "../blogsRepository";
import {Request, Response} from "express";


export const getOneController = (req: Request, res: Response) => {
    const blog = blogsRepository.getOne(req.params.id)
    res.status(200).json(blog)
}
