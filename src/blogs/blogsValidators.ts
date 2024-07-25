import {body} from "express-validator";
import {errorMiddleware} from "../../middlewares/errorMiddleware";


export const nameBlogValidator = body('name')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({max: 15}).withMessage('Имя не должно превышать 15 знаков')

export const descriptionBlogValidator = body('description')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({max: 500}).withMessage('Количество знаков: 1-500')

export const websiteUrlValidator = body('websiteUrl')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isURL().withMessage('Введите валидный URL')
    .isLength({max: 100}).withMessage('Количество знаков 1-100')

export const blogValidators = {
    nameBlogValidator,
    descriptionBlogValidator,
    websiteUrlValidator,
    errorMiddleware
}
