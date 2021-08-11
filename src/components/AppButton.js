import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropType from "prop-types";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function AppButton({ title, onPress, color = "primary", width = "100%" }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: defaultStyles.colors[color], width: width[width] },
      ]}
      onPress={onPress}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: defaultStyles.colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

AppButton.propTypes = {
  title: PropType.string.isRequired,
  onPress: PropType.func.isRequired,
  color: PropType.string,
  width: PropType.string,
};

export default AppButton;
