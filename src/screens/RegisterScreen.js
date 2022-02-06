import React from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import RegisterForm from "../components/forms/RegisterForm";
import defaultStyles from "../config/styles";
import { login } from "../store/auth";
import { register } from "../store/users";

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

      <RegisterForm handleSubmit={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: defaultStyles.colors.primary400,
  },
});

export default RegisterScreen;
