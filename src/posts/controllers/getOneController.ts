import {postsRepository} from "../postsRepository";
import {Request, Response} from "express";


export const getOneController = (req: Request, res: Response) => {
    const post = postsRepository.getOne(req.params.id)
    if (post) {
    res.status(200).json(post)
    } else {
        res.status(404).json('Not Found')
    }
}
