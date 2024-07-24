import {postsRepository} from "../postsRepository";
import {Request, Response} from "express";


export const getOneController = (req: Request, res: Response) => {
    const post = postsRepository.getOne(req.params.id)
    res.status(200).json(post)
}
