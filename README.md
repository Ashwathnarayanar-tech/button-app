# button-app

This app can be used as customaizable button in your store theme.

# Steps to use this app in store theme:
![image](https://user-images.githubusercontent.com/91450011/148210400-ff418246-43d8-4d5a-ad24-5976d83c13e8.png)

## step1:
Add echidna.button@0.0.1 in your store theme dependencies as shown below.
  "dependencies": {
 "echidna.button": "0.x"
  },
  
 ## step2:
 Add the "button" block where you want to use it.
 example: in home.jsonc=>  {
                          "store.home": {
                           "blocks": [
                            "button"
                            ]
                            
## step3:
Declare the "button" block as shown below (it is recommended to copy the below block and change the props as you want)
  "button": {
    "props": {
      "buttonLabel": "Button Test1",
      "size": "larger",
      "href": "https://www.facebook.com",
      "target": "_blank"
    }
  },
  
  ![image](https://user-images.githubusercontent.com/91450011/148211563-c660712e-5c80-4c41-bb33-f04a1268e627.png)

# Available props:
    "buttonLabel":        string              text which will be displayed on button
    "size":               string              button size One of: small, regular, large
    "href":               string              add the link where redirection should take place
    "target":             string              link spec (accepts all possible values of html target attribute)
And it accepts some more props mentioned in Vtex styleguide https://styleguide.vtex.com/#!/Button/1 go here for more details.

# css handles
    .buttonContainer
    .buttonLabel
