import React from "react";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";

import AppAlert from "./AppAlert";
import defaultStyles from "../../config/styles";

const WrongAnswerModal = ({
  alertMessageText,
  isVisible,
  onPressPositiveButton,
  onPressNegativeButton,
}) => {
  return (
    <AppAlert
      displayAlert={isVisible}
      alertTitleText='DOGRU CEVAP:'
      alertMessageText={alertMessageText}
      positiveButtonText='DEVAM'
      onPressPositiveButton={onPressPositiveButton}
      positiveButtonColor='danger'
      textColors='black'
      backgroundColor='light'
      outerBackgroundColor='transparentGray'
      negativeButtonText='KELİME LİSTEME EKLE'
      negativeButtonColor='olive'
      onPressNegativeButton={onPressNegativeButton}
      height='42%'
      icon={
        <FontAwesome
          name='exclamation-triangle'
          size={24}
          color={defaultStyles.colors.danger}
        />
      }
    />
  );
};

WrongAnswerModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onPressNegativeButton: PropTypes.func,
  onPressPositiveButton: PropTypes.func,
};

export default WrongAnswerModal;
