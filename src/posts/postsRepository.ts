import {db} from "../../db/db";
import {blogsRepository} from "../blogs/blogsRepository";


export const postsRepository = {
    getAll() {
        return db.posts.map(p => p)
    },
    getOne(id: string) {
        return db.posts.find(p => p.id === id)
    },
    findById(id: string) {
        return db.posts.find(p => p.id === id)
    },
    createPost(post: any) {
        return {
            id: (new Date().getTime().toString(36)),
            title: post.title,
            content: post.content,
            shortDescription: post.shortDescription,
            blogId: post.blogId,
            blogName: blogsRepository.findById(post.blogId)!.name,
            // blogName: post.blogName
        }
    },
    updatePost(post: any, id: string) {
        const blog: any = blogsRepository.findById(post.blogId)
        console.log(post)
        return db.posts = db.posts.map(p => p.id === id
            ?
            {
                ...p,
                id: post.id,
                title: post.title,
                content: post.content,
                shortDescription: post.shortDescription,
                blogId: post.blogId,
                blogName: blog.name,
            }
            :
            p)
    },
    deletePost(id: string) {
        return db.posts = db.posts.filter(post => post.id !== id)
    }
}
