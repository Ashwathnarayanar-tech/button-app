<!-- 📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion). -->

# Button App

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

This app can be used as customaizable button in your store theme. 

![Media Placeholder](https://user-images.githubusercontent.com/91450011/148210400-ff418246-43d8-4d5a-ad24-5976d83c13e8.png)

## Configuration 

## step1:
Add echidna.button@0.0.1 in your store theme dependencies as shown below.
 "dependencies": {
 "echidna.button": "0.x"
  },
  
 ## step2:
 Add the "button" block where you want to use it.
 example: in home.jsonc
 ```json
   {
   "store.home": {
      "blocks": [
                "button"
               ]
             }
```

                            
## step3:
Declare the "button" block as shown below (it is recommended to copy the below block and change the props as you want)
```json
  "button": {
    "props": {
      "buttonLabel": "Button Test1",
      "size": "larger",
      "href": "https://www.facebook.com",
      "target": "_blank"
    }
  },
```


### props

| Prop name    | Type            | Description    |                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `buttonLabel`      | `string`       | Text which will be displayed on button `mandatory`    
| `size`      | `string`       | Button size One of: small, regular, large         |     
| `href`      | `string`       | Add the link where redirection should take place        | 
| `target`      | `string`       |link spec (accepts all possible values of html target attribute)        |

And it accepts some more props mentioned in Vtex styleguide https://styleguide.vtex.com/#!/Button/1 go here for more details.



## CSS Handles

| CSS Handles |
| ----------- | 
| `.buttonContainer`| 
| `.buttonLabel` | 

###### Note: If you want to increase button width or height, target .buttonLabel only instead of .buttonContainer




<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [akshay-hegde96](https://github.com/akshay-hegde96) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

