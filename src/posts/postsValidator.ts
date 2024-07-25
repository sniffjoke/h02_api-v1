import {body} from "express-validator";
import {blogsRepository} from "../blogs/blogsRepository";

export const idPostValidator = body('id')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({min: 1})

export const titlePostValidator = body('title')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({min: 1, max: 30}).withMessage('Количество знаков 1-30')

export const contentPostValidator = body('content')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({min: 1, max: 1000}).withMessage('Количество знаков: 1-1000')

export const shortDescriptionPostValidator = body('shortDescription')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({min: 1, max: 100}).withMessage('Количество знаков: 1-100')

export const blogIdValidator = body('blogId')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .custom(blogId => {
        const blog = blogsRepository.findById(blogId)
        return !!blog
    }).withMessage('Блог не найден!')
    .isLength({min: 1})

export const blogValidators = {
    idPostValidator,
    titlePostValidator,
    contentPostValidator,
    blogIdValidator,
    shortDescriptionPostValidator
}
