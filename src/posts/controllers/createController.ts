import {postsRepository} from "../postsRepository";
import {Request, Response} from "express";

export const createController = (req: Request, res: Response) => {
    const newPost = postsRepository.createPost({...req.body});
    res.status(201).json(newPost)
}
