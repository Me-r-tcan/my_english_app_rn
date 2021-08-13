import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import SubjectNavigator from "./SubjectNavigator";
import CollectionListScreen from "../screens/CollectionListScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RankingScreen from "../screens/RankingScreen";
import LifeButton from "./lifeButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.SUBJECT_NAVIGATOR}
        component={SubjectNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
          title: "Anasayfa",
        }}
      />
      <Tab.Screen
        name={routes.RANKING}
        component={RankingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='leaderboard' color={color} size={size} />
          ),
          title: "Sıralama",
        }}
      />

      <Tab.Screen
        name={routes.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <LifeButton
              onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='plus-circle'
              color={color}
              size={size}
            />
          ),
        })}
      />

      <Tab.Screen
        name={routes.COLLECTION_LIST}
        component={CollectionListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name='book-bookmark' color={color} size={size} />
          ),
          title: "Kelimelerim",
        }}
      />

      <Tab.Screen
        name={routes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='account-box'
              color={color}
              size={size}
            />
          ),
          title: "Profil",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
