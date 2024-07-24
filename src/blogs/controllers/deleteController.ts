import {blogsRepository} from "../blogsRepository";
import {Request, Response} from "express";


export const deleteController = (req: Request, res: Response) => {
    const findedBlog = blogsRepository.findById(req.params.id);
    if (findedBlog) {
        const deleteBlog = blogsRepository.deleteBlog(req.params.id);
        res.status(204).json(deleteBlog)
    } else {
        res.status(404).json({error: "No blog found with this ID"})
    }
}
