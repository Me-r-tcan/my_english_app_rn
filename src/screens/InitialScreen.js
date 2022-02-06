import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import InitialScreenCarousel from "../components/carousel/InitialScreenCarousel";
import slides from "../components/carousel/slides";
import defaultStyles from "../config/styles";

const InitialScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <View style={styles.carouselContent}>
        <InitialScreenCarousel slides={slides} />
      </View>

      <View style={styles.buttonContent}>
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
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.primary400,
  },
  carouselContent: {
    flex: 0.7,
    marginBottom: 20,
  },
  buttonContent: {
    flex: 0.3,
    paddingHorizontal: 15,
  },
});

export default InitialScreen;
