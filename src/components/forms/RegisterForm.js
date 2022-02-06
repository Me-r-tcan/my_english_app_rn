import { StyleSheet } from "react-native";
import React from "react";

import AppFormSwitchField from "../formElements/AppFormSwitchField";
import { AppForm, AppFormField, SubmitButton } from "../formElements";
import validationSchema from "../../validationSchemas/register";

const RegisterForm = ({ handleSubmit }) => {
  return (
    <AppForm
      initialValues={{
        email: "",
        password: "",
        passwordConfirmation: "",
        username: "",
        notification: false,
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        autoCapitalize='words'
        autoCorrect={false}
        placeholder='Username *'
        icon='person'
        iconLib='Ionicons'
        keyboardType='email-address'
        name='username'
        textContentType='name'
      />
      <AppFormField
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Mail *'
        icon='email'
        keyboardType='email-address'
        name='email'
        textContentType='emailAddress'
      />
      <AppFormField
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Şifre *'
        icon='lock'
        name='password'
        secureTextEntry
        textContentType='password'
      />
      <AppFormField
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Şifre Tekrar *'
        icon='lock'
        name='passwordConfirmation'
        secureTextEntry
        textContentType='password'
      />

      <AppFormSwitchField
        name='notification'
        trackColor={{ false: "secondary400", true: "secondary200" }}
        thumbColor={{ false: "white", true: "secondary" }}
        ios_backgroundColor='white'
        marginCustomVertical={15}
      >
        Bildirimleri veya istatistikleri e-mail yoluyla almak istiyorum.
      </AppFormSwitchField>
      <SubmitButton title='ÜYE OL' color='secondary' />
    </AppForm>
  );
};

const styles = StyleSheet.create({});

export default RegisterForm;
