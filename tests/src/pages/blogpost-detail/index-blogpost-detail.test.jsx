import renderer from 'react-test-renderer';
import React from 'react';
import {
    Box,
    Heading,
    Stack,
    HStack,
    Image,
    Text,
} from "@chakra-ui/react"

function BlogpostEmbed({ blogPostDetail }){
    return (
        <Box>
            <Stack>
                <Heading as="h1">
                    {blogPostDetail.title}
                </Heading>
                <Text>By {blogPostDetail.author}</Text>
                <Text>Published on {blogPostDetail.createdAt}</Text>
                <HStack>
                    <Text as={'span'}> Category: </Text>
                    <Text as={'span'}> {blogPostDetail.category.name} </Text>
                </HStack>
                <Box>
                    <Image
                        src={`https:${blogPostDetail.postImage.url}`}
                        alt={blogPostDetail.postImage.title}
                    />
                </Box>
                <Box>
                    <Text>{blogPostDetail.description}</Text>
                </Box>
            </Stack>
        </Box>
    )
}

describe('Unit test component BlogpostEmbed', () => {

    test('Component <BlogpostEmbed/>', () => {

        const post = {
            slug: 'example',
            title: 'Blog Title',
            shortDescription: 'Loremp ipsum is door',
            author: 'John Doe',
            createdAt: '2023',
            postImage: {
                url: 'https://image.com',
                title: 'Example'
            },
            category: {
                name: 'Example'
            }
        }

        const testRenderer = renderer.create(
            <BlogpostEmbed blogPostDetail={post}/>
          );

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

    })
})