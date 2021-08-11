import React from "react";
import { StyleSheet } from "react-native";

import AppCircle from "./AppCircle";
import AppText from "../AppText";
import defaultStyles from "../../config/styles";

const CategoryCircle = ({ children, onPress, ...otherProps }) => {
  return (
    <>
      <AppCircle
        bgColor={defaultStyles.colors.circleGreen}
        borderWidth={8}
        color={defaultStyles.colors.success}
        shadowColor={defaultStyles.colors.white}
        radius={60}
        size={70}
        onPress={onPress}
        style={styles.appCircle}
        {...otherProps}
      >
        <AppText style={styles.text}>{children}</AppText>
      </AppCircle>
    </>
  );
};

const styles = StyleSheet.create({
  appCircle: {
    marginLeft: 10,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CategoryCircle;
