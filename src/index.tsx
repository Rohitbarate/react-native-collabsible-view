import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';

type Props = {
  title: string;
  description: string;
  // container style
  containerBorderColor?: string;
  containerBorderTopWidth?: number;
  containerPaddingTop?: number;
  containerPaddingBottom?: number;
  containerPaddingVertical?: number;
  containerWidth?: string;
  containerMarginTop?: number;
  containerMarginBottom?: number;
  containerMarginVertical?: number;
  containerBackgroundColor?: string;
  // title style
  titleWidth?: string;
  titleFontSize?: number;
  titleColor?: string;
  titleBackgroundColor?: string;
  // icon style
  iconColor?: string;
  iconFontSize?: number;
  // desc style
  descFontSize?: number;
  descFontWeight?: any;
  descColor?: string;
  descBackgroundColor?: string;
  descWidth?: string;
};

const CollapsibleView = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconRef = useRef(new Animated.Value(0)).current;

  const {
    title,
    description,
    containerBorderColor,
    containerBorderTopWidth,
    containerPaddingTop,
    containerPaddingBottom,
    containerPaddingVertical,
    containerWidth,
    containerMarginTop,
    containerMarginBottom,
    containerMarginVertical,
    titleWidth,
    titleFontSize,
    titleColor,
    titleBackgroundColor,
    iconColor,
    iconFontSize,
    descFontSize,
    descFontWeight,
    descColor,
    containerBackgroundColor,
    descBackgroundColor,
    descWidth,
  } = props;

  const containerStyle = {
    borderColor: containerBorderColor || '#5F5F5F',
    borderTopWidth: containerBorderTopWidth || 1,
    paddingTop: containerPaddingTop,
    paddingBottom: containerPaddingBottom,
    paddingVertical: containerPaddingVertical || 5,
    width: containerWidth || '90%',
    marginTop: containerMarginTop,
    marginBottom: containerMarginBottom,
    marginVertical: containerMarginVertical || 5,
    backgroundColor: containerBackgroundColor || '#fff',
  };
  const titleContStyle = {
    width: titleWidth,
    backgroundColor: titleBackgroundColor,
  };
  const titleStyle = {
    fontSize: titleFontSize || 16,
    color: titleColor || '#fff',
  };
  const iconStyle = {
    color: iconColor || '#fff',
    fontSize: iconFontSize || 16,
  };

  const descContStyle = {
    backgroundColor: descBackgroundColor,
    width: descWidth || '100%',
  };
  const descStyle = {
    fontSize: descFontSize || 14,
    fontWeight: descFontWeight || '400',
    color: descColor || '#ffffff80',
    paddingLeft: 10,
  };

  const iconAnimation = () => {
    Animated.timing(iconRef, {
      toValue: !isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start(({finished}) => finished && setIsOpen(!isOpen));
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={iconAnimation}>
        <View style={[titleContStyle,styles.titleView]}>
          <Text style={[titleStyle, {fontWeight: isOpen ? '900' : '400'}]}>
            {title}
          </Text>
          <Animated.View
            style={{
              transform: [
                {
                  rotate: iconRef.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '-180deg'],
                  }),
                },
              ],
            }}>
            <Text style={iconStyle}>⋁</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <Animated.View style={descContStyle}>
          <Text style={descStyle}>{description}</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default CollapsibleView;

const styles = StyleSheet.create({
  titleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingRight: 5,
  },
});
