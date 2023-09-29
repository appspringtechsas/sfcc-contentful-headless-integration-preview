import BlogpostDetailTheme from '../../../../src/theme/pages/blogpost-detail'

describe('Unit test object BlogpostDetailTheme', () => {

    test('object must have defined structure', () => { 

        const parts = [
            'mainBox', 'postStack', 'postTitle', 'postAuthorText', 'postPublishDate', 
            'postCategory', 'postCategoryName', 'postImageBox', 'postImage', 
            'postDescriptionBox', 'postDescriptionText'
        ]

        const expected = {
            baseStyle: {
                mainBox: expect.any(Object),
                postStack: expect.any(Object),
                postTitle: expect.any(Object),
                postAuthorText: expect.any(Object),
                postPublishDate: expect.any(Object),
                postCategory: expect.any(Object),
                postCategoryName: expect.any(Object),
                postImageBox: expect.any(Object),
                postImage: expect.any(Object),
                postDescriptionBox: expect.any(Object),
                postDescriptionText: expect.any(Object)
            },
            parts: expect.arrayContaining(parts)
        }

        expect(BlogpostDetailTheme).toEqual(expect.objectContaining(expected))
        expect(BlogpostDetailTheme).toMatchObject(expected)
        expect(BlogpostDetailTheme).toStrictEqual(expected)

    })

})