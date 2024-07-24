import {db} from "../../db/db";


export const blogsRepository = {
    getAll() {
        return db.blogs.map(p => p)
    },
    create (blog: any) {
        const newBlog = {
            id: new Date().toISOString() + Math.random().toString(36),
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl
        }
    }
}
