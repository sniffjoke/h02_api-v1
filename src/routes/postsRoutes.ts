import express from "express";
import {createController} from "../posts/controllers/createController";
import {getController} from "../posts/controllers/getController";
import {authMiddleware} from "../../middlewares/authMiddleware";
import {deleteController} from "../posts/controllers/deleteController";
import {putController} from "../posts/controllers/putController";
import {getOneController} from "../posts/controllers/getOneController";

const router = express.Router();


router.route('/').get(getController).post(authMiddleware, createController)
router.route('/:id').delete(authMiddleware, deleteController).put(authMiddleware, putController).get(getOneController)

export default router
