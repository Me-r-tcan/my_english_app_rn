import React, { useState, useRef } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import AppActivityIndicator from "../AppActivityIndicator";
import WritingArea from "./WritingArea";
import CarouselWordWriteItem from "./CarouselWordWriteItem";

import { addWordToMyList } from "../../store/myWordLists";
import { finishSubjectOption } from "../../store/finishedSubjectOptions";
import { progressUpdated } from "../../store/subjectOptions";

const EducationCarousel = ({
  slides,
  subjectOptionId,
  AreaComponent = WritingArea,
  CarouselItemComponent = CarouselWordWriteItem,
  scrollEnabled = false,
}) => {
  if (!slides.length) {
    return null;
  }

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.entities.myWordLists);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const addWordOnPress = () => {
    const { _id } = slides[currentIndex];
    dispatch(addWordToMyList(_id));
  };

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.goBack();
      const { difficulty } = slides[currentIndex];
      dispatch(finishSubjectOption(subjectOptionId, difficulty));
      dispatch(progressUpdated(subjectOptionId));
    }
  };

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <View style={styles.container}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <CarouselItemComponent item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={scrollEnabled}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.key}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />

        <AreaComponent
          scrollTo={scrollTo}
          percentage={currentIndex * (100 / slides.length)}
          item={slides[currentIndex]}
          addWordOnPress={addWordOnPress}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EducationCarousel;
