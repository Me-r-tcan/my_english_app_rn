import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../../config/colors";

const HeaderBackButton = () => {
  const navigation = useNavigation();

  return (
    <Entypo
      name='cross'
      size={30}
      color={colors.danger}
      onPress={() => navigation.goBack()}
      style={{ paddingLeft: 10 }}
    />
  );
};

export default HeaderBackButton;
