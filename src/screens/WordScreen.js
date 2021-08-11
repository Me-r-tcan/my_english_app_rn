import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import BackgroundImage from "../components/BackgroundImage";
import EducationCarousel from "../components/carousel/EducationCarousel";
import WordArea from "../components/carousel/WordArea";
import CarouselWordItem from "../components/carousel/CarouselWordItem";

import { loadWords } from "../store/words";

const WordScreen = ({ route }) => {
  const dispatch = useDispatch();

  const { subjectId, subjectOptionId, progress } = route.params;

  useEffect(() => {
    dispatch(loadWords(subjectId, progress));
  }, []);

  const { words, loading } = useSelector((state) => state.entities.words);

  return (
    <>
      <BackgroundImage source={require("../assets/images/blue.png")} />

      <AppActivityIndicator visible={loading} />

      <View style={styles.container}>
        <EducationCarousel
          slides={words}
          subjectOptionId={subjectOptionId}
          scrollEnabled={true}
          AreaComponent={WordArea}
          CarouselItemComponent={CarouselWordItem}
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

export default WordScreen;
