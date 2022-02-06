import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import InitialScreenCarousel from "../components/carousel/InitialScreenCarousel";
import slides from "../components/carousel/slides";

const InitialScreen = ({ navigation }) => {
  const navigateLogin = () => {
    navigation.navigate(routes.LOGIN);
  };

  const navigateRegister = () => {
    navigation.navigate(routes.REGISTER);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.carouselContent}>
        <InitialScreenCarousel slides={slides} />
      </View>

      <View style={styles.buttonContent}>
        <AppButton title='ÜYE GİRİŞİ' onPress={navigateLogin} color='primary' />
        <AppButton
          title='YENİ ÜYELİK'
          onPress={navigateRegister}
          color='secondary'
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
