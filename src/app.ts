import express from "express";
import cors from "cors";
import {SETTINGS} from "./settings";
import blogsRoutes from "./routes/blogsRoutes";
import testingRoutes from "./routes/testingRoutes";
import postsRoutes from "./routes/postsRoutes";

export const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({version: '2.0'})
})

// app.get(SETTINGS.PATH.BLOGS, authMiddleware, getController)
// app.post(SETTINGS.PATH.BLOGS, createController)
// app.use(SETTINGS.PATH.VIDEOS, videoRoutes)
app.use(SETTINGS.PATH.TESTING, testingRoutes)
app.use(SETTINGS.PATH.BLOGS, blogsRoutes)
app.use(SETTINGS.PATH.POSTS, postsRoutes)
