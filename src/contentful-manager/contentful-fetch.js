import { adaptBlogPost, adaptBlogPosts } from './contentful-adapter'

export const getBlogPosts = async (client, limit, skip) => {
    const blogPostEntries = await client.getEntries({
        content_type: 'blogPost',
        limit: limit ? limit : 100,
        skip: skip ? skip : 0
    })
    const total = blogPostEntries.total
    const blogPosts = adaptBlogPosts(blogPostEntries.items)
    
    return {
        'result': blogPosts,
        'total': total
    }
}

export const getBlogPostsBySlug = async (client, slug) => {
    const blogPostEntries = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug
    })
    const blogPosts = adaptBlogPosts(blogPostEntries.items)
    
    return blogPosts
}

export const getBlogPost = async (client, blogPostId) => {
    const blogPostEntry = await client.getEntry(blogPostId)
    const blogPost = adaptBlogPost(blogPostEntry)
    
    return blogPost
}