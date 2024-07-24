import {postsRepository} from "../postsRepository";
import {Request, Response} from "express";


export const getController = (req: Request, res: Response) => {
    const posts = postsRepository.getAll()
    res.status(200).json(posts)
}
