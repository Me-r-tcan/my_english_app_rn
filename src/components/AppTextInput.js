import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PropType from "prop-types";

import defaultStyles from "../config/styles";
import getIcon from "../helpers/getIcon";

AppTextInput.defaultProps = {
  iconLib: "MaterialCommunityIcons",
  size: 20,
};

function AppTextInput({ icon, size, iconLib, width = "100%", ...otherProps }) {
  let iconComponent = getIcon(iconLib, icon, size, styles.icon);

  return (
    <View style={[styles.container, { width }]}>
      {icon && iconComponent}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
  },
  textInput: {
    width: "95%",
  },
  icon: {
    marginRight: 10,
    marginTop: 4,
    color: defaultStyles.colors.medium,
  },
});

AppTextInput.propTypes = {
  icon: PropType.string,
  iconLib: PropType.string,
  width: PropType.string,
};

export default AppTextInput;
