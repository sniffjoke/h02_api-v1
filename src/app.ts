import express from "express";
import cors from "cors";
import {SETTINGS} from "./settings";
import {getController} from "./blogs/controllers/getController";
import {authMiddleware} from "../middlewares/authMiddleware";
// import videoRoutes from "./routes/videoRoutes";
// import testingRoutes from "./routes/testingRoutes";

export const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({version: '2.0'})
})

app.get(SETTINGS.PATH.BLOGS, authMiddleware, getController)
// app.use(SETTINGS.PATH.VIDEOS, videoRoutes)
// app.use(SETTINGS.PATH.TESTING, testingRoutes)
