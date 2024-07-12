Props:
Used props in image.js
destructured props and used values in component

In App.js

Created object "images" used it as inline css for "div" element for displaying "ImageComponent" side by side

Receipes data got from dummyjson/receipe stored in javascript folder with receipeData.js file
data is stored in single variable ""receipeData"

used props in Heading1,Heading3 , ImageComponent , ButtonComponent components

Iterated receipes data with map method displayed

1. "Name" of each receipe in <Heading1/> Component
2. "Image" of each receipe in <ImageComponent /> Component
3. "Ingredients" are in array so again iterated each 'ingredient' of each receipe under <ol> element and stored in <li> element
4. "Instructions" are in array so again iterated each 'instruction' of each receipe under <ol> element and stored in <li> element

Here map method accepts 2 args "eachElement" and "index" values so used index values for <li> element for with "key" prop
/
