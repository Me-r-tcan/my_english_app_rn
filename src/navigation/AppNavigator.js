import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainTabNavigator from "./MainTabNavigator";
import LearningNavigator from "./LearningNavigator";
import routes from "./routes";
// import useNotifications from "../hooks/useNotifications";

const Stack = createStackNavigator();

const AppNavigator = () => (
  // useNotifications();

  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={routes.MAINTABNAVIGATOR} component={MainTabNavigator} />
    <Stack.Screen
      name={routes.LEARNINGNAVIGATOR}
      component={LearningNavigator}
    />
  </Stack.Navigator>
);

export default AppNavigator;
