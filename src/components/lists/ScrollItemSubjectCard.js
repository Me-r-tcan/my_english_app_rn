import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropType from "prop-types";

import SubjectCircle from "../circles/SubjectCircle";
import routes from "../../navigation/routes";

const ScrollItemSubjectCard = ({ item }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(routes.SUBJECT_DETAIL, {
          subjectId: item._id,
        })
      }
    >
      <View elevation={5} style={[styles.container, { width: width - 30 }]}>
        <View style={styles.content}>
          <View style={styles.subjectCircle}>
            <SubjectCircle
              percent={item.progress}
              icon={item.icon}
              iconLib={item.iconLib}
              onPress={() =>
                navigation.navigate(routes.SUBJECT_DETAIL, {
                  subjectId: item._id,
                })
              }
            />
          </View>
          <View style={styles.rightTextContainer}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    height: 140,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  subjectCircle: {
    flex: 0.5,
    alignSelf: "center",
    justifyContent: "center",
  },
  rightTextContainer: {
    flex: 0.5,
    alignSelf: "center",
  },
  name: {
    color: "#00ff00",
    fontSize: 22,
    fontWeight: "200",
    marginBottom: 4,
    color: "#808080",
  },
});

ScrollItemSubjectCard.propTypes = {
  item: PropType.object.isRequired,
};

export default ScrollItemSubjectCard;
