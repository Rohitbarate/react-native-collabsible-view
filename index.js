import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const CollapsibleView = ({que,ans}) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconRef = useRef(new Animated.Value(0)).current;

  const iconAnimation = () => {
    Animated.timing(iconRef, {
      toValue: !isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start(({finished})=> finished && setIsOpen(!isOpen));
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.que,{fontWeight:isOpen?'900':'400'}]}>
          {que}
        </Text>
        <TouchableOpacity
          onPress={iconAnimation}
          style={{
            elevation:4,
            zIndex:100,
            transform: [
              {
                rotate: iconRef.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "180deg"],
                }),
              },
            ],
          }}
        >
         <Icon name="chevron-down" size={24} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.ansView,
          {
            transform: [
              {
                scaleY:iconRef
              }
            ],
            display:!isOpen?"none":"flex",
          },
        ]}
      >
        <Text style={styles.ans}>
          {ans}
        </Text>
      </Animated.View>
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
