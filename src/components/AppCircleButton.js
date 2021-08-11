import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import defaultStyles from "../config/styles";
import getIcon from "../helpers/getIcon";

const AddButton = ({
  iconLib,
  icon,
  iconSize,
  onPress,
  color = "primary",
  size = 25,
}) => {
  let iconComponent = getIcon(iconLib, icon, iconSize, styles.icon);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: defaultStyles.colors[color], padding: size },
        ]}
        onPress={onPress}
        activeOpacity={0.6}
      >
        {iconComponent}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    borderRadius: 100,
  },
  icon: {
    color: "#fff",
  },
});

export default AddButton;
