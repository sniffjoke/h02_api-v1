import {postsRepository} from "../postsRepository";
import {Request, Response} from "express";
import {db} from "../../../db/db";


export const createController = (req: Request, res: Response) => {
    const newPost = postsRepository.createPost({...req.body});
    db.posts = [...db.posts, newPost];
    res.status(201).json(newPost)
}
