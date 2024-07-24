import {Request, Response} from "express";
import {postsRepository} from "../postsRepository";


export const putController = (req: Request, res: Response) => {
    const findedPost = postsRepository.findById(req.params.id);
    if (findedPost) {
        const updatedPost = postsRepository.updatePost({...req.body, id: findedPost.id}, req.params.id);
        res.status(204).json(updatedPost)
    } else {
        res.status(404).json({error: "No post found with this ID"})
    }
}
