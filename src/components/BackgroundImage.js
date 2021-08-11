import React from "react";
import { StyleSheet, View, Image } from "react-native";

const BackgroundImage = ({ source }) => {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Image source={source} style={styles.image} blurRadius={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default BackgroundImage;
