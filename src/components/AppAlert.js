import React from "react";
import { StyleSheet, Modal, View } from "react-native";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";

import AppText from "./AppText";
import AppButton from "./AppButton";
import defaultStyles from "../config/styles";

const AppAlert = ({
  displayAlert,
  onPressNegativeButton,
  onPressPositiveButton,
  alertTitleText,
  alertMessageText,
  positiveButtonText,
  negativeButtonText,
  positiveButtonColor,
  negativeButtonColor,
  textColors,
  backgroundColor = "medium",
  outerBackgroundColor = "lightGray",
  height = "25%",
}) => {
  return (
    <Modal visible={displayAlert} transparent={true} animationType={"fade"}>
      <View
        style={styles.mainOuterComponent}
        style={[
          styles.mainOuterComponent,
          { backgroundColor: defaultStyles.colors[outerBackgroundColor] },
        ]}
      >
        <View
          style={[
            styles.mainContainer,
            { height: height },
            { backgroundColor: defaultStyles.colors[backgroundColor] },
          ]}
        >
          {/* First Row */}
          <View style={styles.topPart}>
            <FontAwesome
              name='exclamation-triangle'
              size={24}
              color={defaultStyles.colors[textColors]}
            />
            <AppText
              style={[
                styles.alertTitleTextStyle,
                { color: defaultStyles.colors[textColors] },
              ]}
            >
              {alertTitleText}
            </AppText>
          </View>
          {/* Second Row */}
          <View style={styles.middlePart}>
            <AppText style={{ color: defaultStyles.colors[textColors] }}>
              {alertMessageText}
            </AppText>
          </View>
          {/* Third Row */}
          <View style={styles.bottomPart}>
            {positiveButtonText && (
              <AppButton
                title={positiveButtonText}
                color={positiveButtonColor}
                onPress={onPressPositiveButton}
              />
            )}

            {negativeButtonText && (
              <AppButton
                title={negativeButtonText}
                color={negativeButtonColor}
                onPress={onPressNegativeButton}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

AppAlert.propTypes = {
  displayAlert: PropTypes.bool.isRequired,
  onPressNegativeButton: PropTypes.func,
  onPressPositiveButton: PropTypes.func,
  alertTitleText: PropTypes.string,
  alertMessageText: PropTypes.string,
  positiveButtonText: PropTypes.string,
  negativeButtonText: PropTypes.string,
  positiveButtonColor: PropTypes.string,
  negativeButtonColor: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  outerBackgroundColor: PropTypes.string,
};

const styles = StyleSheet.create({
  mainOuterComponent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    width: "80%",
    borderRadius: 10,
    padding: 12,
    justifyContent: "space-between",
  },
  topPart: {
    flexDirection: "row",
    alignItems: "center",
  },
  middlePart: {
    fontSize: defaultStyles.fontSize.medium,
  },
  bottomPart: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  alertTitleTextStyle: {
    ...defaultStyles.h1,
    paddingLeft: 10,
  },
});

export default AppAlert;
