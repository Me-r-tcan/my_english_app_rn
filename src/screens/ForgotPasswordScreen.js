import React from "react";
import { StyleSheet } from "react-native";

import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/formElements";
import Screen from "../components/Screen";
import validationSchema from "../validationSchemas/forgotPassword";

const ForgotPasswordScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
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

        <SubmitButton title='GÖNDER' />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ForgotPasswordScreen;
