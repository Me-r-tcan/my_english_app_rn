import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";

import { AppForm, AppFormField, SubmitButton } from "../formElements";
import validationSchema from "../../validationSchemas/word";

const numberOfLines = 4;

const WordWriteForm = ({ handleSubmit }) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <KeyboardAvoidingView
      style={{ width: windowWidth }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <AppForm
        initialValues={{
          word: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Kelimeyi Yazınız.'
          keyboardType='default'
          name='word'
          textContentType='name'
          multiline
          numberOfLines={Platform.OS === "ios" ? null : numberOfLines}
          minHeight={
            Platform.OS === "ios" && numberOfLines ? 20 * numberOfLines : null
          }
        />

        <SubmitButton title='KONTROL ET' color='success' />
      </AppForm>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default WordWriteForm;
