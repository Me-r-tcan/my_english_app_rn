import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import AppLoading from "expo-app-loading";
import { useDispatch, useSelector, Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";

import configureStore from "./src/store/configuration/configureStore";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";
import authStorage from "./src/auth/storage";

import navigationTheme from "./src/navigation/navigationTheme";
import { authRestored } from "./src/store/auth";

export default function AppWrapper() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <App />
      <FlashMessage
        position='top'
        duration={2250}
        style={{
          paddingTop: Platform.OS === "ios" ? 20 : Constants.statusBarHeight,
        }}
      />
    </Provider>
  );
}

const App = () => {
  const user = useSelector((state) => state.entities.auth.user);

  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (token) {
      dispatch(authRestored(token));
    }
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <NavigationContainer theme={navigationTheme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
