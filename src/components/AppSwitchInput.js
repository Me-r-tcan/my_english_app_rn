import React from "react";
import { View, Switch, StyleSheet } from "react-native";
import PropType from "prop-types";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

const AppSwitchInput = ({
  trackColor,
  thumbColor,
  iosBackgroundColor,
  children,
  marginCustomVertical,
  value,
  onValueChange,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { marginVertical: marginCustomVertical }]}>
      <AppText onPress={onValueChange}>{children}</AppText>
      <Switch
        trackColor={{
          false: defaultStyles.colors[trackColor["false"]],
          true: defaultStyles.colors[trackColor["true"]],
        }}
        thumbColor={
          value
            ? defaultStyles.colors[thumbColor["true"]]
            : defaultStyles.colors[thumbColor["false"]]
        }
        ios_backgroundColor={defaultStyles.colors[iosBackgroundColor]}
        onValueChange={onValueChange}
        value={value}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
});

AppSwitchInput.defaultProps = {
  marginCustomVertical: 40,
};

AppSwitchInput.propTypes = {
  trackColor: PropType.shape({
    false: PropType.string.isRequired,
    true: PropType.string.isRequired,
  }).isRequired,
  thumbColor: PropType.shape({
    false: PropType.string.isRequired,
    true: PropType.string.isRequired,
  }).isRequired,
  iosBackgroundColor: PropType.string,
  children: PropType.node,
  marginCustomVertical: PropType.number,
  value: PropType.any,
  onValueChange: PropType.func.isRequired,
};

export default AppSwitchInput;
