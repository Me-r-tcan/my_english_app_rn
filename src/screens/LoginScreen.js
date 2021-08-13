import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/formElements";
import validationSchema from "../validationSchemas/login";
import routes from "../navigation/routes";
import { login } from "../store/auth";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.entities.auth);

  const handleSubmit = ({ email, password }) => {
    dispatch(login(email, password));
  };

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <View style={styles.container}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Mail'
            icon='email'
            keyboardType='email-address'
            name='email'
            textContentType='emailAddress'
          />

          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Şifre'
            icon='lock'
            name='password'
            secureTextEntry
            textContentType='password'
          />

          <SubmitButton title='GİRİŞ' />
          <AppText
            style={styles.forgotPassword}
            onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}
          >
            Şifremi Unuttum
          </AppText>
        </AppForm>

        <View style={styles.socialMediaLoginArea}>
          <AppButton
            title='FACEBOOK İLE GİRİŞ YAP'
            color='primary'
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
