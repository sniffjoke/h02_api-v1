export type BlogDbType = {
    id: string
    name: string // max 15
    description: string // max 500
    websiteUrl: string // max 100 ^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$
}

export type PostDbType = {
    id: string
    title: string // max 30
    shortDescription: string // max 100
    content: string // max 1000
    blogId: string // valid
    blogName: string
}

export type DBType = { // типизация базы данных (что мы будем в ней хранить)
    blogs: BlogDbType[]
    posts: PostDbType[]
    // some: any[]
}

export const db: DBType = {
    blogs: [
        {
            id: '12345',
            name: 'string',
            description: 'string',
            websiteUrl: 'string'
        }
    ],
    posts: []
}
