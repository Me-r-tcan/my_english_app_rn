import { Platform } from "react-native";

export const fontFamily = {
  regular: Platform.OS === "android" ? "Roboto" : "Avenir",
};

export const fontSize = {
  xLarge: 20,
  large: 18,
  medium: 16,
  paragraph: 14,
  small: 12,
  xs: 10,
};
