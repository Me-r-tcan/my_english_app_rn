import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import BackConfirmation from "../confirmations/BackConfirmation";
import colors from "../../config/colors";

import { openBackConfirmation } from "../../store/confirmations";

const HeaderBackButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Entypo
        name='cross'
        size={30}
        color={colors.danger}
        onPress={() => dispatch(openBackConfirmation())}
        style={{ paddingLeft: 10 }}
      />

      <BackConfirmation />
    </>
  );
};

export default HeaderBackButton;
