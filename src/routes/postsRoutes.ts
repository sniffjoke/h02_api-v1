import express from "express";
import {createController} from "../posts/controllers/createController";
import {getController} from "../posts/controllers/getController";
import {authMiddleware} from "../../middlewares/authMiddleware";
import {deleteController} from "../posts/controllers/deleteController";
import {putController} from "../posts/controllers/putController";
import {getOneController} from "../posts/controllers/getOneController";
import {
    blogIdValidator,
    contentPostValidator,
    shortDescriptionPostValidator,
    titlePostValidator
} from "../posts/postsValidator";
import {errorMiddleware} from "../../middlewares/errorMiddleware";

const router = express.Router();


router.route('/')
    .get(getController)
    .post(
        authMiddleware,
        titlePostValidator,
        contentPostValidator,
        shortDescriptionPostValidator,
        blogIdValidator,
        errorMiddleware,
        createController
    )
router.route('/:id')
    .delete(authMiddleware, deleteController)
    .put(
        authMiddleware,
        titlePostValidator,
        contentPostValidator,
        shortDescriptionPostValidator,
        blogIdValidator,
        errorMiddleware,
        putController
    )
    .get(getOneController)

export default router
