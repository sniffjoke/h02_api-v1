import {blogsRepository} from "../blogsRepository";
import {Request, Response} from "express";


export const putController = (req: Request, res: Response) => {
    const findedBlog = blogsRepository.findById(req.params.id);
    if (findedBlog) {
        const updatedBlog = blogsRepository.updateBlog({...req.body}, req.params.id);
        res.status(204).json(updatedBlog)
    } else {
        res.status(404).json({error: "No blog found with this ID"})
    }
}
