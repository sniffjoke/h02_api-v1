import {validationResult} from "express-validator";
import {NextFunction, Response, Request} from "express";
import {PostInputModel} from "../types/PostInputModel";
import {BlogInputModel} from "../types/BlogInputModel";

export type FieldNamesType = keyof BlogInputModel | keyof PostInputModel
export type OutputErrorsType = {
    errorsMessages: {
        message: string,
        field: FieldNamesType}[]
}


export const errorMiddleware = (req: Request, res: Response<OutputErrorsType>, next: NextFunction) => {
    const e = validationResult(req)
    if (!e.isEmpty()) {
        const eArray = e.array({onlyFirstError: true}) as { path: FieldNamesType, msg: string }[]

        res
            .status(400)
            .json({
                errorsMessages: eArray.map(x => ({field: x.path, message: x.msg}))
            })
        return
    }
    next()
}
