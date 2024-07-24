import {postsRepository} from "../postsRepository";
import {Request, Response} from "express";


export const deleteController = (req: Request, res: Response) => {
    const findedPost = postsRepository.findById(req.params.id);
    if (findedPost) {
        const deletePost = postsRepository.deletePost(req.params.id);
        res.status(204).json(deletePost)
    } else {
        res.status(404).json({error: "No post found with this ID"})
    }
}
