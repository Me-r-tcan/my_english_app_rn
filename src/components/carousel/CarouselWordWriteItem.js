import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppCard from "../AppCard";

const CarouselWordWriteItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <AppCard style={styles.turkishWords}>
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
    fontSize: 20,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
});

export default CarouselWordWriteItem;
