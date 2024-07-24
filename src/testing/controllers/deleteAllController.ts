import { Request, Response } from 'express';
import {testingRepository} from "../testingRepository";

export const deleteAllController = (req: Request, res: Response) => {
    testingRepository.deleteAll()
    res.status(204).send('База данных очищенаs')
}
