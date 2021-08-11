import React, { useEffect, useState, useRef } from "react";
import { AppState } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import AppLoading from "expo-app-loading";
import { useDispatch, useSelector, Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";

import configureStore from "./src/store/configuration/configureStore";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";
// import AuthContext from "./src/auth/context";
import authStorage from "./src/auth/storage";
import timeStorage from "./src/auth/timeStorage";

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
  const life = useSelector((state) => state.entities.life);

  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (token) {
      dispatch(authRestored(token));

      // const elapsed = await timeStorage.getTime();
      // dispatch(elapsedTimeReceived(elapsed));
    }
  };

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChange);

    return () => AppState.removeEventListener("change", handleAppStateChange);
  }, []);

  const handleAppStateChange = async (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      // const elapsed = await timeStorage.getTime();
      // dispatch(elapsedTimeReceived(elapsed));
    }
    // else {
    // let time;
    // if (life.elapsedTime) {
    //   console.log("redux:", life.elapsedTime);
    //   time = life.elapsedTime;
    // } else {
    //   time = new Date().toISOString();
    // }
    // await timeStorage.storeTime(time);
    // }

    appState.current = nextAppState;
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
    // <AuthContext.Provider value={{ user, setUser }}>
    <NavigationContainer theme={navigationTheme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
    // </AuthContext.Provider>
  );
};
