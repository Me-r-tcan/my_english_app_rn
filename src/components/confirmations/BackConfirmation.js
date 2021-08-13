import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import AppAlert from "../AppAlert";
import { closeBackConfirmation } from "../../store/confirmations";

const BackConfirmation = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { BackConfirmationOpen } = useSelector(
    (state) => state.entities.confirmations
  );

  const onPressPositiveButton = () => {
    dispatch(closeBackConfirmation());
    navigation.goBack();
  };

  const onPressNegativeButton = () => {
    dispatch(closeBackConfirmation());
  };

  return (
    <AppAlert
      displayAlert={BackConfirmationOpen}
      alertTitleText='UYARI'
      alertMessageText='Geri dönmek istediğinize emin misiniz?'
      positiveButtonText='ONAYLA'
      negativeButtonText='İPTAL'
      onPressPositiveButton={onPressPositiveButton}
      onPressNegativeButton={onPressNegativeButton}
      positiveButtonColor='danger'
      negativeButtonColor='silver'
      textColors='black'
      backgroundColor='gray'
      outerBackgroundColor='transparentGray'
      height='25%'
    />
  );
};

export default BackConfirmation;
