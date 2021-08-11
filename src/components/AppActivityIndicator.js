import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

function AppActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator
        animating={visible}
        size='large'
        color={defaultStyles.colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppActivityIndicator;
