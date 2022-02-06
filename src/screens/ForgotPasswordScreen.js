import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";

const ForgotPasswordScreen = () => {
  const handleSubmit = () => {
    // TODO: sifremi unuttum eklenecek
  };

  return (
    <Screen style={styles.container}>
      <ForgotPasswordForm handleSubmit={handleSubmit} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ForgotPasswordScreen;
