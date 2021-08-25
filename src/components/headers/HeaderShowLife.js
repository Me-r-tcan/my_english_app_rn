import React from "react";
import { View, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import AppText from "../AppText";
import defaultStyles from "../../config/styles";

const HeaderShowLife = () => {
  const { life } = useSelector((state) => state.entities.generalInfo);

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Entypo
        name='heart'
        size={24}
        color={defaultStyles.colors.danger}
        style={{
          paddingRight: 8,
          ...Platform.select({
            android: {
              paddingTop: 2,
            },
          }),
        }}
      />

      <AppText
        style={{
          paddingRight: 15,
          ...defaultStyles.h1,
          color: defaultStyles.colors.danger,
        }}
      >
        {life}
      </AppText>
    </View>
  );
};

export default HeaderShowLife;
