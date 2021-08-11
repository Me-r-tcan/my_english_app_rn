import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import Carousel from "../components/carousel/Carousel";
import slides from "../components/carousel/slides";

const InitialScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <Carousel slides={slides} />
      </View>
      <AppButton
        title='ÜYE GİRİŞİ'
        onPress={() => navigation.navigate(routes.LOGIN)}
        color='primary'
      />
      <AppButton
        title='YENİ ÜYELİK'
        onPress={() => navigation.navigate(routes.REGISTER)}
        color='primary'
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InitialScreen;
