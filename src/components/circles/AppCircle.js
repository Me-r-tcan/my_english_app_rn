import React from "react";
import { StyleSheet, Pressable } from "react-native";
import PropType from "prop-types";
import ProgressCircle from "react-native-progress-circle";

import defaultStyles from "../../config/styles";
import getIcon from "../../helpers/getIcon";

const AppCircle = ({
  percent,
  color,
  shadowColor,
  bgColor,
  radius,
  borderWidth,
  icon,
  iconLib,
  size,
  children,
  onPress,
}) => {
  let iconComponent;
  if (percent === 100) {
    iconComponent = getIcon("MaterialIcons", "done", size, styles.icon);
  } else {
    iconComponent = getIcon(iconLib, icon, size, styles.icon);
  }

  return (
    <Pressable onPress={onPress}>
      <ProgressCircle
        percent={percent}
        radius={radius}
        borderWidth={borderWidth}
        color={color}
        shadowColor={shadowColor}
        bgColor={bgColor}
      >
        {icon && iconComponent}
      </ProgressCircle>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: defaultStyles.colors.white,
  },
});

AppCircle.propTypes = {
  percent: PropType.number.isRequired,
  color: PropType.string.isRequired,
  shadowColor: PropType.string.isRequired,
  bgColor: PropType.string.isRequired,
  radius: PropType.number.isRequired,
  borderWidth: PropType.number.isRequired,
  icon: PropType.string.isRequired,
  iconLib: PropType.string.isRequired,
  size: PropType.number.isRequired,
};

export default AppCircle;
