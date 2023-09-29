import React, { useState, useEffect } from "react"
import { getBlogPostsBySlug } from "../../contentful-manager/contentful-fetch"
import {
    Box,
    Stack,
    Heading,
    Text,
    Image,
    useMultiStyleConfig
} from "@chakra-ui/react"

const BlogpostEmbed = ({ client, blogpostSlug, themeName = 'BlogpostEmbedTheme' }) => {
    const [blogPostDetail, setBlogPostDetail] = useState()
    const styleConfig = useMultiStyleConfig(themeName)

    useEffect(() => {
        if (blogpostSlug) {
            const fetchBlogpostDetail = async () => {
                const blogRes = await getBlogPostsBySlug(client, blogpostSlug)
                setBlogPostDetail(blogRes[0])
            }

            fetchBlogpostDetail()
        }
    }, [blogpostSlug])

    if (!blogPostDetail) {
        return null
    }

    return (
        <Box {...styleConfig.mainBox}>
            <Stack {...styleConfig.stack}>
                <Box {...styleConfig.containerHead}>
                    <Heading
                        as="h1"
                    >
                        {blogPostDetail.title}
                    </Heading>
                </Box>
                <Box {...styleConfig.containerDescription}>
                    <Box {...styleConfig.containerImage}>
                        <Image
                            src={`https:${blogPostDetail.postImage.url}`}
                            alt={blogPostDetail.postImage.title}
                            {...styleConfig.postImage}
                        />
                    </Box>
                    <Box {...styleConfig.containerButton}>
                        <Text {...styleConfig.postDescription}>{blogPostDetail.description}</Text>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default BlogpostEmbed