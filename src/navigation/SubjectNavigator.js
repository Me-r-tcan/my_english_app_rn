import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "../screens/LandingScreen";
import SubjectListScreen from "../screens/SubjectListScreen";
import SubjectDetailScreen from "../screens/SubjectDetailScreen";

import routes from "./routes";

const Stack = createStackNavigator();

const SubjectNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.LANDING}
      component={LandingScreen}
      options={{
        title: "Konular",
        headerShown: false,
      }}
    />

    <Stack.Screen
      name={routes.SUBJECT_LIST}
      component={SubjectListScreen}
      options={{
        title: "Konular",
      }}
    />
    <Stack.Screen
      name={routes.SUBJECT_DETAIL}
      component={SubjectDetailScreen}
      options={{
        title: "Alıştırmalar",
      }}
    />
  </Stack.Navigator>
);

export default SubjectNavigator;
