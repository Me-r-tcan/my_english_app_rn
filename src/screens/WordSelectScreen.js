import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import BackgroundImage from "../components/BackgroundImage";
import EducationCarousel from "../components/carousel/EducationCarousel";
import SelectingArea from "../components/carousel/SelectingArea";
import CarouselWordSelectItem from "../components/carousel/CarouselWordSelectItem";

import { loadSelectableWords } from "../store/words";

const WordSelectScreen = ({ route }) => {
  const dispatch = useDispatch();

  const { subjectId, subjectOptionId, progress } = route.params;

  useEffect(() => {
    dispatch(loadSelectableWords(subjectId, progress));
  }, []);

  // Burda words listesi kullanılacak - seçenekleri belirlemek için selectableWords listesi kullanılacak
  const { words, loading } = useSelector((state) => state.entities.words);

  return (
    <>
      <BackgroundImage source={require("../assets/images/blue.png")} />

      <AppActivityIndicator visible={loading} />

      <View style={styles.container}>
        <EducationCarousel
          slides={words}
          subjectOptionId={subjectOptionId}
          scrollEnabled={false}
          AreaComponent={SelectingArea}
          CarouselItemComponent={CarouselWordSelectItem}
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

export default WordSelectScreen;
