import React from "react";
import { useNavigation } from "@react-navigation/native";

import AppText from "../AppText";
import { AppForm, AppFormField, SubmitButton } from "../formElements";
import validationSchema from "../../validationSchemas/login";
import routes from "../../navigation/routes";
import defaultStyles from "../../config/styles";

const LoginForm = ({ handleSubmit }) => {
  const navigation = useNavigation();

  const navigateForgotPassword = () => {
    navigation.navigate(routes.FORGOT_PASSWORD);
  };

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
        onPress={navigateForgotPassword}
        style={{ color: defaultStyles.colors.medium }}
      >
        Şifremi Unuttum
      </AppText>
    </AppForm>
  );
};

export default LoginForm;
