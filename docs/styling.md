## Styling

SFCC Contentful Headless Integration provides default styles for all its components, but it also allows you to create your own custom styles and use them on the components. As mentioned there are two options: use default styles or use custom styles. For both options you will need to follow a couple of steps.

### Default styles

If you want to use the default styles provided by the package, you will need to locate the locate the *theme* folder that is located in **app/theme** inside your **pwa-kit** project and, within you should see two folders and an **index.js** file. In this file is located an object that contains all the styles of the project, so in order for the styles provided by the package to work you need to add them to this file. There are four default styles: **BlogpostEmbedTheme**, **BlogpostCarouselTheme**, **BlogpostListTheme** and **BlogpostDetailTheme**.

For example, if you want to add the styles for the BlogpostCarousel component, you have to add the following lines: 

- Import the custom style:
```javascript
import { BlogpostCarouselTheme } from '@appspringtechsas/sfcc-contentful-headless-integration'
```
- Add the style to the *overrides* object in the *components* property:
```javascript
const overrides = {
	components: {
		BlogpostCarouselTheme
	}
}
```
**Note:** This object contains multiple values, but you **should not** need to delete them, just put the imported styling separated by a comma.

After doing this, the default styling for the BlogpostCarousel component should be applied.

If you are using all the components provided by the package, import all the default styles and add them to the *overrides* object as described in the example.

### Custom styles

If the default styles do meet your requirements, then adding custom styles is the way to go. In order to do this, you will need to create your own styling file for each component and then, add them to the **index.js** file in the *theme* folder of the pwa-kit project. Remember that the pwa-kit project uses Chakra-UI, so the styles need to be created inside a JavaScript file as an object.

The styles for each component need to be created using the same properties (class names) that the custom styles uses. The structure for each component styles file are the following:

- **Blogpost Carousel:**
```javascript
const BlogpostCarouselTheme = {
		baseStyle: {
			mainBox: {},
			slideBox: {},
			slideContainer: {},
			slideStack: {},
			slideFlex: {},
			card: {},
			containerImage: {},
			slideImage: {},
			containerHeading: {},
			slideHeading: {},
			containerText: {},
			slideText: {},
			containerButton: {},
			slideButton: {}
		},
		parts: [
			'mainBox', 'slideBox', 'slideContainer', 'slideStack',
			'slideFlex', 'card', 'containerImage', 'slideImage',
			'containerHeading', 'slideHeading', 'containerText',
			'slideText', 'containerButton', 'slideButton'
		]
	}
```

- **Blogpost Embed:**
```javascript
const BlogpostEmbedTheme = {
		baseStyle: {
			mainBox: {},
			stack: {},
			containerHead: {},
			imageContainer: {},
			containerDescription: {},
			postImage: {},
			postDescription: {}
		},
		parts: [
			'mainBox', 'stack', 'containerHead', 'imageContainer',
			'containerDescription', 'postImage', 'postDescription'
		]
	}
```

- **Blogpost Detail:**
```javascript
const BlogpostDetailTheme = {
		baseStyle: {
			mainBox: {},
			postStack: {},
			postTitle: {},
			postAuthorText: {},
			postPublishDate: {},
			postCategory: {},
			postCategoryName: {},
			postImageBox: {},
			postImage: {},
			postDescriptionBox: {},
			postDescriptionText: {}
		},
		parts: [
			'mainBox', 'postStack', 'postTitle', 'postAuthorText', 'postPublishDate', 
			'postCategory', 'postCategoryName', 'postImageBox', 'postImage', 
			'postDescriptionBox', 'postDescriptionText'
		]
	}
```

- **Blogpost List:**
```javascript
const BlogpostListTheme = {
		baseStyle: {
			mainBox: {},
			selectFlexBox: {},
			selectHeading: {},
			select: {},
			listStack: {},
			postBox: {},
			postFlexBox: {},
			postImage: {},
			contentBox: {},
			contentTitle: {},
			contentText: {},
			paginationStack: {},
			paginationText: {}
		},
		parts: [
			'mainBox', 'selectFlexBox', 'selectHeading', 'select', 'listStack', 'postBox',
			'postFlexBox', 'postImage', 'contentBox', 'contentTitle', 'contentText',
			'paginationStack'
		]
	}
```

You can add all the styling you need within each of the properties and they will applied to the corresponding component.

For example, if you want to add custom styles BlogpostEmbed component, follow these steps:

- Create your custom styling file under *app/theme/components/project*

- Add your styling using the structure mentioned before. The name of the styling object can be whatever you want, just do not forget to export it, for example:
```javascript
const BlogpostEmbedCustom = {
		baseStyle: {
			mainBox: {
				marginBottom: '50px'
			},
			stack: {
				align: 'center'
			},
			containerHead:{
				fontSize: '25px',
				fontWeight: '500'
			},
			imageContainer: {
				width: { base: '100%', sm: '50%', md: '50%', lg: '50%' },
				m: '20px auto'
			},
			containerDescription:{
				display: 'flex',
				alignItems: 'center'
			},
			containerImage:{
				marginRight: '20px'
			},
			postImage: {
				width: '100%',
				height: '100%',
				borderRadius: '10px'
			},
			postDescription: {
				fontSize: { base: 16, lg: 18 },
			},
			containerButton:{}
		},
		parts: [
			'mainBox', 'stack', 'imageContainer', 'postImage',
			'postDescription', 'containerHead', 'containerDescription',
			'containerImage', 'containerButton'
		]
	}

	export default BlogpostEmbedCustom
```

- Go to the **index.js** file in the *theme* folder, import your custom style and add it to the *overrides* object inside the *components* property:
```javascript
import BlogpostEmbedCustom from './components/project/blogpost-embed-custom'
```
```javascript
const overrides = {
	components: {
		BlogpostEmbedCustom
	}
}
```
- Remember that you do not need to modify or delete any of the other styles that are inside the *overrides* object

- Pass the name of your styling object as a value in the **themeName** parameter of the corresponding component, in this case BlogpostEmbed component:
```javascript
<BlogpostEmbed blogpostSlug={''} themeName={'BlogpostEmbedCustom'}/>
```

After doing this, the component should be using your styles instead of the default styles.