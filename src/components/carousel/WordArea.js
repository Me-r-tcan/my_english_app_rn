import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import AppActivityIndicator from "../AppActivityIndicator";
import AppCircleButton from "../AppCircleButton";
import NextButton from "./NextButton";

const EducationCarousel = ({ scrollTo, percentage, addWordOnPress }) => {
  const { loading } = useSelector((state) => state.entities.myWordLists);

  return (
    <>
      <AppActivityIndicator visible={loading} />

      <View style={styles.btnContent}>
        <AppCircleButton
          iconLib='Ionicons'
          icon='md-add'
          iconSize={36}
          onPress={addWordOnPress}
        />

        <NextButton scrollTo={scrollTo} percentage={percentage} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnContent: {
    flex: 0.3,
    flexDirection: "row",
  },
});

export default EducationCarousel;
