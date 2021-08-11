import React from "react";
import { StyleSheet } from "react-native";

import AppCircle from "./AppCircle";
import defaultStyles from "../../config/styles";

const SubjectCircle = ({ onPress, ...otherProps }) => {
  return (
    <>
      <AppCircle
        color={defaultStyles.colors.success}
        borderWidth={8}
        bgColor={defaultStyles.colors.circleGreen}
        shadowColor={defaultStyles.colors.white}
        radius={60}
        size={70}
        onPress={onPress}
        {...otherProps}
      />

      {/* 
        // Success alanı için
      <SubjectCircle
        percent={100}
        color={defaultStyles.colors.success}
        bgColor={defaultStyles.colors.success}
        icon='check'
        iconLib='FontAwesome5'
      >
        Deneme
      </SubjectCircle>

      // Test colors 
      bgColor={"#387F62"}
      bgColor={"#74A18E"}
      bgColor={"#689B87"}
       */}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default SubjectCircle;
