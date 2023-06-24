This is the custom collabsible view for making the custom FAQ section or dropdown menu in your react native project. it supports both android and ios operating systems.

# Installation

1. Run: `$ npm i --save react-native-collapsible-view-faq`

## Usage

Import the component:

```javascript
import CollapsibleView from 'react-native-collapsible-view-faq';

      <CollapsibleView 
        title={'What is your name?'}
        description={'Rohit Barate'}
      />
```
## Full Example

```javascript
import React, { useRef, useState } from "react";
import { View } from "react-native";
import CollapsibleView from 'react-native-collapsible-view-faq';

const App = () => {

  return (
    <View style={flex:1}>
       <CollapsibleView 
        title={'What is your name?'}
        description={'Rohit Barate'}
      />
    </View>
  );
};

export default App;

```

## Properties

### Required props

  |Prop | Type | 
  |:-----:|:------:|
  title | string | 
  description| string | 

### Optional props

| Prop | Type | Default|
|:-----:|:-----:|:-----:|
|containerBorderColor|string|'#5F5F5F'|
|containerBorderTopWidth|number|1|
|containerPaddingTop|number| |
|containerPaddingBottom|number| |
|containerPaddingVertical|number|5|
|containerWidth|string|'90%'|
|containerMarginTop|number| |
|containerMarginBottom|number| |
|containerMarginVertical|number|5|
|containerBackgroundColor|string|'#FFFFFF'|
|titleWidth|string| |
|titleBackgroundColor|string| |
|titleFontSize|number|16 |
|titleColor|string|'#fff' |
|iconColor|string|'#fff' |
|iconFontSize|number|16 |
|descBackgroundColor|string| |
|descWidth|string|'100%'|
|descFontSize|number|14 |
|descFontWeight|string|'400'|
|descColor|string|'#ffffff80'|


## npm Link
 [npm](https://www.npmjs.com/package/react-native-collapsible-view-faq)



## Demo

 <video src="https://user-images.githubusercontent.com/90303131/227137033-74e7128e-949e-406c-88b2-bd9ff66db6f5.mp4" width="150" > 



 
 <!-- 
## License

[MIT License](http://opensource.org/licenses/mit-license.html). © 2018 San Pyae Lin -->
