import {db} from "../../db/db";


export const blogsRepository = {
    getAll() {
        return db.blogs.map(p => p)
    },
    getOne(id: string) {
        return db.blogs.find(p => p.id === id)
    },
    findById(id: string) {
        return db.blogs.find(p => p.id === id)
    },
    createBlog(blog: any) {
        return {
            id: (new Date().getTime().toString(36)),
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl
        }
    },
    updateBlog(blog: any, id: string) {

            // const updatedBlog = {
            //     id,
            //     name: blog.name,
            //     description: blog.description,
            //     websiteUrl: blog.websiteUrl
            // }
            return db.blogs = db.blogs.map(p => p.id === id
                ?
                {
                    ...p,
                    id,
                    name: blog.name,
                    description: blog.description,
                    websiteUrl: blog.websiteUrl
                }
                :
                p)
    },
    deleteBlog(id: string) {
        return db.blogs = db.blogs.filter(blog => blog.id !== id)
    }
}
