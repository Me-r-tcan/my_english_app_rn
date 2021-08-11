import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import BackgroundImage from "../components/BackgroundImage";
import Lecture from "../components/Lecture";

const DATA = [
  {
    title: "Konu1",
    data: `* Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    example: `- example11111111111111111111111111111 
- example222222222222222222222222222222222222
    `,
  },
  {
    title: "Konu2",
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    title: "Konu3",
    data: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with
    the release of Letraset sheets containing Lorem Ipsum passages, and
    more recently with desktop publishing software like Aldus PageMaker
    including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with
    the release of Letraset sheets containing Lorem Ipsum passages, and
    more recently with desktop publishing software like Aldus PageMaker
    including versions of Lorem Ipsum`,
    example: "example333333333333333333333",
  },
];

const LectureScreen = () => {
  const renderItem = ({ item }) => (
    <Lecture title={item.title} detail={item.data} example={item.example} />
  );

  return (
    <>
      <BackgroundImage source={require("../assets/images/blue.png")} />

      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.title.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LectureScreen;
