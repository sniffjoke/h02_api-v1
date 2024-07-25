import express from "express";
import {createController} from "../blogs/controllers/createController";
import {getController} from "../blogs/controllers/getController";
import {authMiddleware} from "../../middlewares/authMiddleware";
import {deleteController} from "../blogs/controllers/deleteController";
import {putController} from "../blogs/controllers/putController";
import {getOneController} from "../blogs/controllers/getOneController";
import {nameBlogValidator, websiteUrlValidator, descriptionBlogValidator} from "../blogs/blogsValidators";
import {errorMiddleware} from "../../middlewares/errorMiddleware";

const router = express.Router();


router.route('/').get(getController).post(authMiddleware, nameBlogValidator, descriptionBlogValidator, websiteUrlValidator, errorMiddleware, createController)
router.route('/:id').delete(authMiddleware, deleteController).put(authMiddleware, nameBlogValidator, descriptionBlogValidator, websiteUrlValidator, putController).get(getOneController)

export default router
