import React from "react";

import { AppForm, AppFormField, SubmitButton } from "../formElements";
import validationSchema from "../../validationSchemas/forgotPassword";

const ForgotPasswordForm = ({ handleSubmit }) => {
  return (
    <AppForm
      initialValues={{ email: "" }}
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

      <SubmitButton title='GÖNDER' />
    </AppForm>
  );
};

export default ForgotPasswordForm;
