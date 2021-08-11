import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import PropType from "prop-types";

const ScrollItemWordCard = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View elevation={5} style={[styles.container, { width: width - 30 }]}>
      <View style={styles.englishWords}>
        <Text>
          {item.englishWords.map((engWord, i) => (
            <Text key={i} style={styles.word}>
              {engWord}
              {", "}
            </Text>
          ))}
        </Text>
      </View>

      <View style={styles.turkishWords}>
        <Text>
          {item.turkishWords.map((turWord, i) => (
            <Text key={i} style={styles.word}>
              {turWord}
              {",  "}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    height: 150,
  },
  englishWords: {
    flex: 0.5,
    paddingHorizontal: "3%",
    paddingBottom: "4%",
  },
  turkishWords: {
    flex: 0.5,
    paddingHorizontal: "3%",
    paddingBottom: "4%",
  },
  word: {
    fontWeight: "800",
    fontSize: 18,
    color: "#493d8a",
  },
});

ScrollItemWordCard.propTypes = {
  item: PropType.object.isRequired,
};

export default ScrollItemWordCard;
