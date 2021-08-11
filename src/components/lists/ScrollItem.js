import React, { useState } from "react";
import { Animated, useWindowDimensions, View } from "react-native";
import PropType from "prop-types";

import ScrollItemSubjectCard from "./ScrollItemSubjectCard";

const ScrollItem = ({
  ScrollItemCardComponent = ScrollItemSubjectCard,
  y,
  index,
  distanceBetweenItem,
  item,
}) => {
  const { height } = useWindowDimensions();

  const [cardHeight, setCardHeight] = useState(0);
  const position = Animated.subtract(index * cardHeight, y);
  const isDisappearing = -cardHeight;
  const isTop = 0;
  const isBottom = height - cardHeight;
  const isAppearing = height;

  const translateY = Animated.add(
    y,
    y.interpolate({
      inputRange: [0, 0.00001 + index * cardHeight],
      outputRange: [0, -index * cardHeight],
      extrapolateRight: "clamp",
    })
  );

  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.85, 1, 1, 1],
    extrapolate: "clamp",
  });

  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [1, 1, 1, 1],
  });

  return (
    <Animated.View
      style={[
        {
          marginVertical: distanceBetweenItem,
          alignSelf: "center",
        },
        { opacity, transform: [{ translateY }, { scale }] },
      ]}
      key={index}
    >
      <View
        onLayout={(event) => {
          var { height } = event.nativeEvent.layout;
          setCardHeight(height + distanceBetweenItem * 2);
        }}
      >
        <ScrollItemCardComponent item={item} />
      </View>
    </Animated.View>
  );
};

ScrollItem.propTypes = {
  ScrollItemCardComponent: PropType.elementType,
  y: PropType.object.isRequired,
  index: PropType.number.isRequired,
  distanceBetweenItem: PropType.number.isRequired,
  item: PropType.object.isRequired,
};

export default ScrollItem;
