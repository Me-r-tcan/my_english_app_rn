import React from "react";
import { StyleSheet, Modal, View } from "react-native";
import PropTypes from "prop-types";

import AppText from "../AppText";
import AppButton from "../AppButton";
import defaultStyles from "../../config/styles";

const AppAlert = ({
  displayAlert,
  onPressPositiveButton,
  alertTitleText,
  alertMessageText,
  positiveButtonText,
  positiveButtonColor,
  textColors,
  backgroundColor = "medium",
  outerBackgroundColor = "lightGray",
  height = "30%",
  negativeButtonText,
  negativeButtonColor,
  onPressNegativeButton,
  icon,
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
            {icon}

            <AppText
              style={[
                styles.alertTitleTextStyle,
                { color: defaultStyles.colors[positiveButtonColor] },
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
            {negativeButtonText && (
              <AppButton
                title={negativeButtonText}
                color={negativeButtonColor}
                onPress={onPressNegativeButton}
                height='120%'
              />
            )}

            {positiveButtonText && (
              <AppButton
                title={positiveButtonText}
                color={positiveButtonColor}
                onPress={onPressPositiveButton}
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
    justifyContent: "flex-end",
  },
  mainContainer: {
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
  },
  topPart: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },
  middlePart: {
    flex: 2,
    width: "100%",
    fontSize: 16,
  },
  bottomPart: {
    flex: 4,
    justifyContent: "space-evenly",
  },
  alertTitleTextStyle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default AppAlert;
