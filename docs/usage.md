## Usage

### Contentful client

First of all, it is necessary to create the Contentful client with your space ID and the access token. SFCC Contentful Headless Integration provides a function that creates and returns the client, allowing you to use it wherever you use any of the components provided by this package.

Create a new Javascript file in the root of the pwa-kit project and inside of it put the following code snippet:

```javascript
import { createContentfulClient } from '@appspringtechsas/sfcc-contentful-headless-integration'

export const client = createContentfulClient(space_id, access_token)
```

Replace *space_id* and *access_token* with your real values (see [Setup an API Key](#setup-an-api-key) section).

Now that you have created the client you can import it in any file in which you want to use SFCC Contentful Headless Integration components. 

### Components

SFCC Contentful Headless Integration provides four components: BlogpostList, BlogpostDetail, BlogpostCarousel and BlogpostEmbed. **BlogpostList** and **BlogpostDetail** are components meant to be pages of the pwa-kit and **BlogpostCarousel** and **BlogpostEmbed** are components design to be a part of other pwa-kit pages.

#### BlogpostCarousel component

BlogpostCarousel component creates a carousel with the latest five blogs that you have published or modified on your Contentful space. It has one parameter: *client* which is a mandatory parameter. This component is designed to be part of other pages, therefore you only need to import it in your file and add it to your page.

In order to add BlogpostCarousel component to your page do the following:

```javascript
import { client } from '../../../contentful-client'
import { BlogpostCarousel } from '@appspringtechsas/sfcc-contentful-headless-integration'

<BlogpostCarousel client={client} />
```

#### BlogpostEmbed component

BlogpostEmbed component displays a blogpost entry without having to go to the blogpost detail page. It has two parameters: *client* which is a mandatory parameter and *blogpostSlug* which is another mandatory parameter used by the component to query the information of the blog post. This component is designed to be part of other pages, therefore you only need to import it in your file and add it to your page.

BlogpostEmbed component needs the blogpost slug to display its information, you can pass this value through the *blogpostSlug* parameter:

```javascript
import { client } from '../../../contentful-client'
import { BlogpostEmbed } from '@appspringtechsas/sfcc-contentful-headless-integration'

<BlogpostEmbed client={client} blogpostSlug={'blogpost-slug'} />
```
Both parameters are mandatory, without them BlogpostEmbed won't work properly.

### BlogpostList component

BlogpostList is a component that renders a list of all the published blog posts. It has three parameters: *client* which is mandatory, *limit* which is an optional parameter used to specify the number of entries for pagination (default value is 100) and *themeName*, another optional parameter used for styling (this will be explained in the Styling section). This component is designed to be a page of the pwa-kit.

In order to use this component, you must create a new page within the pwa-kit project, to do this, you need to create a folder for your page under the **app/pages** folder. In this example the folder will be called *blogpost-list*, but you can use any name. Inside this newly created folder add an **index.jsx** file which is going to be the main file for your new page. Once you have created the page, add the following code snippet:

```javascript
import React from 'react'
import { client } from '../../../contentful-client'
import { BlogpostList } from '@appspringtechsas/sfcc-contentful-headless-integration'

const PostList = () => {
    return <BlogpostList client={client} limit={10}	themeName={'BlogpostListCustomTheme'} />
}

PostList.getTemplateName = () => 'blogpost-list'

export default PostList
```

The code above does multiple things:
- Imports the client created in [Contentful client](#contentful-client) section
- Creates a new component, in this case called PostList, which will return the component provided by SFCC Contentful Headless Integration
- The BlogpostList receives the client and in this particular case, both the *limit* and the *themeName* parameters, which are optional.

**Note:** The new page follows the same structure of other pages that are in the pwa-kit by default.

Now that the page has been created, you need to modify the *routes.jsx* file of the pwa-kit, which you can find in **app** folder. Import your page in the file and assing it to a constant:

```javascript
const PostList = loadable(() => import('./pages/blogpost-list'), {fallback})
```
Then, modify the *routes* array and add a new element that contains the name of the path and the component whose value will be the constant created above:

```javascript
const routes = [
    {
        path: '/blogpost-list',
        component: PostList
    }
]
```
Do not modify any of the other elements, just add the new one.

BlogpostList adds the category name to the path whenever the user filters by category. This is done to allow the users to copy the url with the category name and access the page with the filter already activated. In order to achieve this, the path for the blogpost-list page needs to have the **:catName?** parameter on the path. The question mark is to specify that this parameter is optional.

After doing this, you should be able to access through the path you specified.

### BlogpostDetail component

BlogpostDetail is a component that renders detailed information about a specific blog post. It has two parameters: *client* which is mandatory and *themeName*, which is an optional parameter used for styling (this will be explained in the Styling section). This component is designed to be a page of the pwa-kit.

In order to use this component, you must create a new page within the pwa-kit project, to do this, you need to create a folder for your page under the **app/pages** folder. In this example the folder will be called *blogpost-detail*, but you can use any name. Inside this newly created folder add an **index.jsx** file which is going to be the main file for your new page. Once you have created the page, add the following code snippet:

```javascript
import React from 'react'
import { client } from '../../../contentful-client'
import { BlogpostDetail } from '@appspringtechsas/sfcc-contentful-headless-integration'

const PostDetail = () => {
    return <BlogpostDetail client={client} themeName={'blogpostDetailCustomTheme'} />
}

PostDetail.getTemplateName = () => 'blogpost-detail'

export default PostDetail
```

The code above does multiple things:
- Imports the client created in [Contentful client](#contentful-client) section
- Creates a new component, in this case called PostDetail, which will return the component provided by SFCC Contentful Headless Integration
- The BlogpostDetail receives the client and in this particular case, the *themeName*, which is not mandatory.

**Note:** The new page follows the same structure of other pages that are in the pwa-kit by default.

Now that the page has been created, you need to modify the *routes.jsx* file of the pwa-kit, which you can find in **app** folder. Import your page in the file and assing it to a constant:

```javascript
const PostDetail = loadable(() => import('./pages/blogpost-detail'), {fallback})
```
Then, modify the *routes* array and add a new element that contains the name of the path and the component whose value will be the constant created above:

```javascript
const routes = [
    {
        path: '/blogpost-detail/:blogpostSlug',
        component: PostDetail
    }
]
```
Do not modify any of the other elements, just add the new one.

The page for the detail of the blogpost needs to have this **:blogpostSlug** on the path. That is a parameter passed through the url and contains the slug of the blogpost whose data will be displayed.

After doing this, you should be able to access the page through the path you specified. Keep in mind that you need to pass the slug of the blog post in the url or else, the page will not show anything.