import { StyleSheet } from "react-native";
import React from "react";

import AppText from "../AppText";
import { AppForm, AppFormField, SubmitButton } from "../formElements";
import validationSchema from "../../validationSchemas/login";
import routes from "../../navigation/routes";

const LoginForm = ({ handleSubmit }) => {
  return (
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
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
