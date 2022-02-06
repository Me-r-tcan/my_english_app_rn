import React from "react";
import { StyleSheet, View } from "react-native";
import defaultStyles from "../config/styles";

function Container({ children, color = "primary400", style }) {
  return (
    <View
      style={[
        styles.view,
        style,
        { backgroundColor: defaultStyles.colors[color] },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default Container;
