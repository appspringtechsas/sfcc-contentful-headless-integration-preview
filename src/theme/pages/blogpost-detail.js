const BlogpostDetailTheme = {
    baseStyle: {
        mainBox: {
            m: { base: '50px 20px', sm: '50px 0px', md: '50px 0px', lg: '50px 0px' }
        },
        postStack: {
            align: 'center'
        },
        postTitle: {},
        postAuthorText: {},
        postPublishDate: {
            fontSize: 14,
            fontStyle: 'italic'
        },
        postCategory: {
            fontSize: 14,
            fontWeight: 'bold'
        },
        postCategoryName: {
            fontSize: 14
        },
        postImageBox: {
            width: {base: '100%', sm: '50%', md: '50%', lg: '50%' },
        },
        postImage: {
            width: '100%',
            height: '100%'
        },
        postDescriptionBox: {
            width: { base: '100%', sm: '80%', md: '80%', lg: '70%' }
        },
        postDescriptionText: {
            fontSize: { base: 18, lg: 20 }
        }
    },
    parts: [
        'mainBox', 'postStack', 'postTitle', 'postAuthorText', 'postPublishDate', 
        'postCategory', 'postCategoryName', 'postImageBox', 'postImage', 
        'postDescriptionBox', 'postDescriptionText'
    ]
}

export default BlogpostDetailTheme