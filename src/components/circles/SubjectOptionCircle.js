import React from "react";
import { StyleSheet } from "react-native";

import AppCircle from "./AppCircle";
import AppText from "../AppText";
import defaultStyles from "../../config/styles";

const SubjectOptionCircle = ({ children, onPress, ...otherProps }) => {
  return (
    <>
      <AppCircle
        color={defaultStyles.colors.success}
        bgColor={defaultStyles.colors.circleGreen}
        borderWidth={8}
        shadowColor={defaultStyles.colors.white}
        radius={65}
        size={75}
        onPress={onPress}
        {...otherProps}
      >
        <AppText style={styles.text}>{children}</AppText>
      </AppCircle>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default SubjectOptionCircle;
