import {blogsRepository} from "../blogsRepository";
import {Request, Response} from "express";


export const getOneController = (req: Request, res: Response) => {
    const blog = blogsRepository.getOne(req.params.id)
    if (blog) {
        res.status(200).json(blog)
    } else {
        res.status(404).json({error: "No blog found with this ID"})
    }
}
