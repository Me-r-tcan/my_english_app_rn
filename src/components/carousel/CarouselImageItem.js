import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

import defaultStyles from "../../config/styles";

const CarouselImageItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "cover" }]}
      />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 0.9,
  },
  title: {
    fontSize: 28,
    color: defaultStyles.colors.secondary300,
    marginVertical: 3,
  },
  description: {
    color: defaultStyles.colors.secondary400,
  },
});

export default CarouselImageItem;
