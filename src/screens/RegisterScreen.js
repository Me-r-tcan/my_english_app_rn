import React from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppFormSwitchField from "../components/formElements/AppFormSwitchField";
import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/formElements";
import { login } from "../store/auth";
import { register } from "../store/users";
import validationSchema from "../validationSchemas/register";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.entities.users);
  const auth = useSelector((state) => state.entities.auth);

  const registerAndLogin = (values) => (dispatch, getState) => {
    dispatch(register(values)).then(() => {
      const { isSuccessfullyRegistered } = getState().entities.users;
      if (isSuccessfullyRegistered) {
        dispatch(login(values.email, values.password));
      }
    });
  };

  const handleSubmit = (values) => {
    dispatch(registerAndLogin(values));
  };

  return (
    <ScrollView style={styles.container}>
      <AppActivityIndicator visible={loading || auth.loading} />

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
          trackColor={{ false: "danger", true: "success" }}
          thumbColor={{ false: "white", true: "primary" }}
          ios_backgroundColor='white'
          marginCustomVertical={10}
        >
          Bildirimleri veya istatistikleri e-mail yoluyla almak istiyorum.
        </AppFormSwitchField>
        <SubmitButton title='ÜYE OL' color='success' />
      </AppForm>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
