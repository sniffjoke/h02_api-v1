import express from "express";
import {createController} from "../blogs/controllers/createController";
import {getController} from "../blogs/controllers/getController";
import {authMiddleware} from "../../middlewares/authMiddleware";
import {deleteController} from "../blogs/controllers/deleteController";
import {putController} from "../blogs/controllers/putController";

const router = express.Router();


router.route('/').get(getController).post(authMiddleware, createController)
router.route('/:id').delete(authMiddleware, deleteController).put(authMiddleware, putController)

export default router
