import React from "react";
import { Animated } from "react-native";
import PropType from "prop-types";

import ScrollItem from "./ScrollItem";

const ScrollList = ({
  data,
  distanceBetweenItem: distance,
  ScrollItemComponent = ScrollItem,
  ScrollItemCardComponent,
  keyExtractor,
  ...otherProps
}) => {
  const y = React.useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });

  let distanceBetweenItem = distance || 6;

  return (
    <Animated.FlatList
      scrollEventThrottle={16}
      bounces={false}
      data={data}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      renderItem={(data) => {
        const { index, item } = data;
        return (
          <ScrollItemComponent
            {...{ index, y, item, distanceBetweenItem }}
            ScrollItemCardComponent={ScrollItemCardComponent}
          />
        );
      }}
      {...{ onScroll }}
      {...otherProps}
    />
  );
};

ScrollList.propTypes = {
  data: PropType.arrayOf(PropType.object),
  distance: PropType.number,
  ScrollItemComponent: PropType.elementType,
  ScrollItemCardComponent: PropType.elementType,
};

export default ScrollList;
