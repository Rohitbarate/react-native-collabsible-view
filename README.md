This is the custom collabsible view for making the custom FAQ section or dropdown menu in your react native project. it supports both android and ios operating systems.

# Installation

1. Run: `$ npm install --save react-native-collabsible-view`

## Screen Shot

<!-- <img src="https://raw.githubusercontent.com/sanpyaelin/react-native-collapse-view/master/images/demo.gif" width="200">  -->

## Usage

Import the component:
```js
import CollapsibleView from 'react-native-collabsible-view';

      <CollapsibleView 
        title={'What is your name?'}
        description={'Rohit Barate'}
      />
  
```
## Full Example

```
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";


const CollapsibleView = ({title,description}) => {

  return (
    <View style={styles.container}>
       <CollapsibleView 
        title={'What is your name?'}
        description={'Rohit Barate'}
      />
    </View>
  );
};

export default CollapsibleView;

const styles = StyleSheet.create({
  container: {
    borderTopColor: "#5F5F5F",
    borderTopWidth: 1,
    paddingTop: 5,
    overflow: "hidden",
    paddingBottom:10,
    width:'90%',
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    // elevation:4,
    // zIndex:100
  },
  que: {
    width: "90%",
    fontSize: 16,
    fontWeight: "bold",
    color:'#fff',
  },
  ansView: {
    // flex: 1,
    right:0,
    bottom:0,
    width:'95%'
  },
  ans: {
    fontSize: 14,
    fontWeight: "400",
    color: "#4F4F4F",
  },
});

```

## Properties

Prop | Type | Default
-----|------|---------
collapse | bool | false 
tension| number | 10 
renderView| func |  
renderCollapseView | func | 

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © 2018 San Pyae Lin