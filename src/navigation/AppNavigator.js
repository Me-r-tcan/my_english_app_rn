import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainTabNavigator from "./MainTabNavigator";
import LectureScreen from "../screens/LectureScreen";
import WordScreen from "../screens/WordScreen";
import WordSelectScreen from "../screens/WordSelectScreen";
import WordWriteScreen from "../screens/WordWriteScreen";
import SentenceWriteScreen from "../screens/SentenceWriteScreen";
import HeaderBackButton from "../components/headers/HeaderBackButton";
import HeaderShowLife from "../components/headers/HeaderShowLife";

import routes from "./routes";
// import useNotifications from "../hooks/useNotifications";

const Stack = createStackNavigator();

const AppNavigator = () => (
  // useNotifications();

  <Stack.Navigator>
    <Stack.Screen
      name={routes.MAIN_TAB_NAVIGATOR}
      component={MainTabNavigator}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen name={routes.LECTURE} component={LectureScreen} />
    <Stack.Screen name={routes.WORD} component={WordScreen} />
    <Stack.Screen name={routes.WORD_SELECT} component={WordSelectScreen} />
    <Stack.Screen
      name={routes.WORD_WRITE}
      component={WordWriteScreen}
      options={{
        // iosta back yazısı çıktığı için eklendi.
        headerBackTitle: " ",
        headerLeft: () => <HeaderBackButton />,
        headerRight: () => <HeaderShowLife />,
      }}
    />
    <Stack.Screen
      name={routes.SENTENCE_WRITE}
      component={SentenceWriteScreen}
    />
  </Stack.Navigator>
);

export default AppNavigator;
