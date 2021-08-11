import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import InitialScreen from "../screens/InitialScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.INITIAL}
      component={InitialScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.LOGIN}
      component={LoginScreen}
      options={{ title: "Giriş" }}
    />
    <Stack.Screen
      name={routes.REGISTER}
      component={RegisterScreen}
      options={{ title: "Yeni Üye" }}
    />
    <Stack.Screen
      name={routes.FORGOT_PASSWORD}
      component={ForgotPasswordScreen}
      options={{ title: "Şifremi Unuttum" }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
