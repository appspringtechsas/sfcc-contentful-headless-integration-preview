import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react"
import { getBlogPostsBySlug } from "../../contentful-manager/contentful-fetch"
import {
    Box,
    Stack,
    Heading,
    HStack,
    Text,
    Image,
    useMultiStyleConfig
} from "@chakra-ui/react"

const formatDate = (dateObject) => {
    const formattedDate = `${dateObject.getMonth() + 1}-${dateObject.getDate()}-${dateObject.getFullYear()}`
    return formattedDate
}

const BlogpostDetail = ({ client, themeName = 'BlogpostDetailTheme' }) => {
    const { blogpostSlug } = useParams()
    const [blogPostDetail, setBlogPostDetail] = useState()
    const styleConfig = useMultiStyleConfig(themeName)

    useEffect(() => {
        if (blogpostSlug) {
            const fetchBlogpostDetail = async () => {
                const blogRes = await getBlogPostsBySlug(client, blogpostSlug)
                const createdDate = new Date(blogRes[0].createdAt)
                blogRes[0].createdAt = formatDate(createdDate)
                setBlogPostDetail(blogRes[0])
            }
    
            fetchBlogpostDetail()
        }
    }, [blogpostSlug])

    if (!blogPostDetail) {
        return <Box>Loading...</Box>
    }

    return (
        <Box {...styleConfig.mainBox}>
            <Stack {...styleConfig.postStack}>
                <Heading as="h1" {...styleConfig.postTitle}>                    
                    {blogPostDetail.title}
                </Heading>
                <Text {...styleConfig.postAuthorText}>By {blogPostDetail.author}</Text>
                <Text {...styleConfig.postPublishDate}>Published on {blogPostDetail.createdAt}</Text>
                <HStack>
                    <Text as={'span'} {...styleConfig.postCategory}> Category: </Text>
                    <Text as={'span'} {...styleConfig.postCategoryName}> {blogPostDetail.category.name} </Text>
                </HStack>
                <Box {...styleConfig.postImageBox}>
                    <Image
                        src={`https:${blogPostDetail.postImage.url}`}
                        alt={blogPostDetail.postImage.title}
                        {...styleConfig.postImage}
                    />
                </Box>
                <Box {...styleConfig.postDescriptionBox}>
                    <Text {...styleConfig.postDescriptionText}>{blogPostDetail.description}</Text>
                </Box>
            </Stack>
        </Box>
    )
}

export default BlogpostDetail
