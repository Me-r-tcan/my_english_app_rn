import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import defaultStyles from "../config/styles";

function Screen({ children, color = "primary400", style }) {
  return (
    <SafeAreaView
      style={[
        styles.screen,
        style,
        { backgroundColor: defaultStyles.colors[color] },
      ]}
    >
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
