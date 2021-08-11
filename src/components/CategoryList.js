import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppText from "./AppText";
import CategoryCircle from "./circles/CategoryCircle";
import routes from "../navigation/routes";

const data = [
  {
    id: "1",
    name: "Başlangıç",
    level: "elementary",
    icon: "album",
    iconLib: "MaterialCommunityIcons",
  },
  {
    id: "2",
    name: "Orta",
    level: "intermediate",
    icon: "album",
    iconLib: "MaterialCommunityIcons",
  },
  {
    id: "3",
    name: "İleri",
    level: "advanced",
    icon: "album",
    iconLib: "MaterialCommunityIcons",
  },
];

const CategoryList = ({ title, progressData }) => {
  if (!progressData.length) {
    return null;
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(data) => data.id}
        data={data}
        renderItem={({ item }) => {
          let progress = 0;
          if (progressData) {
            let progressArray = progressData.filter(
              (data) => data._id == item.level
            );
            if (progressArray.length) {
              progress = progressArray[0].avgProgress;
            }
          }

          return (
            <View style={styles.categoryContainer}>
              <CategoryCircle
                percent={progress}
                icon={item.icon}
                iconLib={item.iconLib}
                onPress={() =>
                  navigation.navigate(routes.LEARNINGNAVIGATOR, {
                    screen: routes.SUBJECT_LIST,
                    params: { level: item.level },
                  })
                }
              >
                {item.name}
              </CategoryCircle>
            </View>
          );
        }}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  categoryContainer: {
    marginLeft: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default CategoryList;
