import React from "react";
import { StyleSheet, ScrollView, useWindowDimensions } from "react-native";

import defaultStyles from "../config/styles";

const AppCard = ({ backgroundColor = "white", style, children }) => {
  const { width } = useWindowDimensions();

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: defaultStyles.colors[backgroundColor] },
        ,
        { width },
        style,
      ]}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: defaultStyles.colors.light,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 4,
  },
});

export default AppCard;
