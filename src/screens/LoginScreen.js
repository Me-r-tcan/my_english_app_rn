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

  return (
    <View style={styles.container}>
      <AppActivityIndicator visible={loading} />

      <View style={styles.content}>
        <LoginForm handleSubmit={handleSubmit} />

        <View style={styles.socialMediaLoginArea}>
          <AppButton
            title='FACEBOOK İLE GİRİŞ YAP'
            color='secondary'
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
          <AppButton
            title='GMAIL İLE GİRİŞ YAP'
            color='danger'
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>

        <View style={styles.registerBtnArea}>
          <AppButton
            title='ÜYE OL'
            color='success'
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.primary400,
  },
  content: {
    padding: 10,
  },
  containerHeader: {
    alignSelf: "center",
    marginVertical: 25,
    fontSize: 24,
  },
  forgotPassword: {
    fontSize: 14,
    marginLeft: 15,
    marginTop: 10,
  },
  socialMediaLoginArea: {
    marginTop: 40,
  },
  registerBtnArea: {
    marginTop: 40,
  },
});

export default LoginScreen;
