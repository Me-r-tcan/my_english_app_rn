import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import defaultStyles from "../config/styles";
import { login } from "../store/auth";
import LoginForm from "../components/forms/LoginForm";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.entities.auth);

  const handleSubmit = ({ email, password }) => {
    dispatch(login(email, password));
  };

  const handleFacebookAuth = () => {
    // TODO: facebook auth eklenecek
  };

  const handleGmailAuth = () => {
    // TODO: gmail auth eklenecek
  };

  const navigateRegister = () => {
    navigation.navigate(routes.REGISTER);
  };

  return (
    <View style={styles.container}>
      <AppActivityIndicator visible={loading} />

      <View style={styles.form}>
        <LoginForm handleSubmit={handleSubmit} />
      </View>

      <View style={styles.socialMediaLoginArea}>
        <AppButton
          title='FACEBOOK İLE GİRİŞ YAP'
          color='secondary'
          onPress={handleFacebookAuth}
        />
        <AppButton
          title='GMAIL İLE GİRİŞ YAP'
          color='danger'
          onPress={handleGmailAuth}
        />
      </View>

      <View style={styles.registerBtnArea}>
        <AppButton title='ÜYE OL' color='success' onPress={navigateRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.primary400,
    padding: 15,
  },
  form: {
    flex: 0.45,
  },
  socialMediaLoginArea: {
    flex: 0.35,
  },
  registerBtnArea: {
    flex: 0.2,
  },
});

export default LoginScreen;
