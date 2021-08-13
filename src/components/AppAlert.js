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
                width='40%'
                height='120%'
              />
            )}

            {negativeButtonText && (
              <AppButton
                title={negativeButtonText}
                color={negativeButtonColor}
                onPress={onPressNegativeButton}
                width='40%'
                height='120%'
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
  },
  topPart: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  middlePart: {
    flex: 1,
    width: "100%",
    padding: 4,
    fontSize: defaultStyles.fontSize.medium,
    marginVertical: 2,
  },
  bottomPart: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10%",
  },
  alertTitleTextStyle: {
    ...defaultStyles.h1,
    paddingLeft: 10,
  },
  alertMessageButtonStyle: {
    marginBottom: "10%",
  },
});

export default AppAlert;
