import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppCard from "../AppCard";

const CarouselWordItem = ({ item }) => {
  return (
    <View>
      <AppCard>
        {item.englishWords.map((engWord, i) => {
          return (
            <Text style={styles.title} key={i}>
              {engWord}
            </Text>
          );
        })}
      </AppCard>
      <AppCard>
        {item.turkishWords.map((turWord, i) => {
          return (
            <Text style={styles.title} key={i}>
              {turWord}
            </Text>
          );
        })}
      </AppCard>
    </View>
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

export default CarouselWordItem;
