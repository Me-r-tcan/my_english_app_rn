import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SubjectListScreen from "../screens/SubjectListScreen";
import SubjectDetailScreen from "../screens/SubjectDetailScreen";
import LectureScreen from "../screens/LectureScreen";
import WordScreen from "../screens/WordScreen";
import WordSelectScreen from "../screens/WordSelectScreen";
import WordWriteScreen from "../screens/WordWriteScreen";
import SentenceWriteScreen from "../screens/SentenceWriteScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const LearningNavigator = () => (
  <Stack.Navigator>
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
    <Stack.Screen name={routes.LECTURE} component={LectureScreen} />
    <Stack.Screen name={routes.WORD} component={WordScreen} />
    <Stack.Screen name={routes.WORDSELECT} component={WordSelectScreen} />
    <Stack.Screen
      name={routes.WORDWRITE}
      component={WordWriteScreen}
      options={{
        // iosta back yazısı çıktığı için eklendi.
        headerBackTitle: " ",
      }}
    />
    <Stack.Screen name={routes.SENTENCEWRITE} component={SentenceWriteScreen} />
  </Stack.Navigator>
);

export default LearningNavigator;
