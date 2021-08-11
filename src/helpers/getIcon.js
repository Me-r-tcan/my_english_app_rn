import React from "react";
import {
  AntDesign,
  Fontisto,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

function getIcon(iconLib, icon, size, style) {
  let iconComponent = null;
  switch (iconLib) {
    case "Fontisto":
      return (iconComponent = (
        <Fontisto name={icon} size={size} style={style} />
      ));
    case "Ionicons":
      return (iconComponent = (
        <Ionicons name={icon} size={size} style={style} />
      ));
    case "MaterialCommunityIcons":
      return (iconComponent = (
        <MaterialCommunityIcons name={icon} size={size} style={style} />
      ));
    case "MaterialIcons":
      return (iconComponent = (
        <MaterialIcons name={icon} size={size} style={style} />
      ));
    case "FontAwesome5":
      return (iconComponent = (
        <FontAwesome5 name={icon} size={size} style={style} />
      ));
    case "AntDesign":
      return (iconComponent = (
        <AntDesign name={icon} size={size} style={style} />
      ));
    default:
      return iconComponent;
  }
}

export default getIcon;
