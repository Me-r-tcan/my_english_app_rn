// Şuanda bu component kullanılmıyor.

import React from "react";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";

import AppAlert from "./AppAlert";
import defaultStyles from "../../config/styles";

const RightAnswerModal = ({
  alertMessageText,
  isVisible,
  onPressPositiveButton,
}) => {
  return (
    <AppAlert
      displayAlert={isVisible}
      alertTitleText='DOGRU CEVAP VERİLDİ.'
      alertMessageText={alertMessageText}
      positiveButtonText='DEVAM'
      onPressPositiveButton={onPressPositiveButton}
      positiveButtonColor='success'
      textColors='black'
      backgroundColor='light'
      outerBackgroundColor='transparentGray'
      height='30%'
      icon={
        <AntDesign
          name='checkcircle'
          size={24}
          color={defaultStyles.colors.success}
        />
      }
    />
  );
};

RightAnswerModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onPressNegativeButton: PropTypes.func,
  onPressPositiveButton: PropTypes.func,
};

export default RightAnswerModal;
