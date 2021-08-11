import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import AppCard from "./AppCard";

const Lecture = ({ title, detail, example }) => {
  return (
    <View>
      <AppCard backgroundColor='white'>
        {title ? <AppText style={styles.title}>{title}</AppText> : null}
        {detail ? <AppText style={styles.detail}>{detail}</AppText> : null}
        {example ? <AppText style={styles.example}>{example}</AppText> : null}
      </AppCard>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    marginBottom: 10,
  },
  example: {
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "200",
    flex: 1,
  },
});

export default Lecture;
