import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppCard from "../AppCard";

const CarouselWordSelectItem = ({ item }) => {
  return (
    <AppCard style={{ flex: 0.5 }}>
      {item.englishWords.map((engWord, i) => {
        return (
          <Text style={styles.title} key={i}>
            {engWord}
          </Text>
        );
      })}
    </AppCard>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
    fontSize: 26,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
});

export default CarouselWordSelectItem;
