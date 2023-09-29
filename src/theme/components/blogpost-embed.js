const BlogpostEmbedTheme = {
    baseStyle: {
        mainBox: {
            mb: '60px'
        },
        stack: {
            align: 'center'
        },
        containerHead:{},
        imageContainer: {
            width: { base: '100%', sm: '50%', md: '50%', lg: '50%' },
            m: '20px auto'
        },
        containerDescription:{},
        containerImage:{},
        postImage: {
            width: '100%',
            height: '100%'
        },
        postDescription: {
            fontSize: { base: 16, lg: 18 },
        },
        containerButton:{}
    },
    parts: [
        'mainBox', 'stack', 'imageContainer', 'postImage', 'postDescription',
        'containerHead', 'containerDescription', 'containerImage', 'containerButton'
    ]
}

export default BlogpostEmbedTheme