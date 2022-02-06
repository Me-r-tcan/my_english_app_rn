import React from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import Container from "../components/Container";
import RegisterForm from "../components/forms/RegisterForm";
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
    <Container>
      <ScrollView style={styles.container}>
        <AppActivityIndicator visible={loading || auth.loading} />

        <RegisterForm handleSubmit={handleSubmit} />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default RegisterScreen;
