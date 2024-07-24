import {config} from "dotenv";

config()

export const SETTINGS = {
    PORT: process.env.PORT || 3003,
    PATH: {
        // VIDEOS: '/api/videos',
        TESTING: '/api/testing/all-data',
        BLOGS: '/api/blogs',
        POSTS: '/api/posts',
        ADMIN: process.env.ADMIN || 'admin:qwerty',
    }
}
