import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";

import WordWriteForm from "../forms/WordWriteForm";
import ProgressBar from "./ProgressBar";
import WrongAnswerModal from "../modals/WrongAnswerModal";

import { updateGeneralInfo } from "../../store/generalInfo";
import { wordCopyAndPush } from "../../store/words";

const WritingArea = ({ item, scrollTo, percentage, addWordOnPress }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isModalWrongVisible, setIsModalWrongVisible] = useState(false);

  const closeModalWrongAndContinue = () => {
    setIsModalWrongVisible(false);
    scrollTo();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.header}>
          <ProgressBar percentage={percentage} />
        </View>
      ),
    });
  });

  const handleSubmit = (values, { resetForm }) => {
    item.englishWords.map((word) => {
      // Cevap verilen kelimeyi küçült ve boşlukları kaldır.
      const answerWord = values.word.toLowerCase().trim();

      if (!answerWord) {
        showMessage({
          message: "Kelime yazınız.",
          icon: { icon: "auto", position: "left" },
          type: "danger",
        });

        return;
      }

      // hatalı cevap ise
      if (word !== answerWord) {
        dispatch(updateGeneralInfo({ life: -1 }));
        setIsModalWrongVisible(true);
        dispatch(wordCopyAndPush(item._id));
      } else {
        showMessage({
          message: "Doğru Cevap",
          icon: { icon: "auto", position: "left" },
          type: "success",
        });
        scrollTo();
      }
    });

    resetForm();
  };

  return (
    <>
      <WordWriteForm handleSubmit={handleSubmit} />

      {/* Yazılan cevabın görünmesi için alan ittirildi. */}
      {isModalWrongVisible && <View style={{ marginBottom: "30%" }} />}

      <WrongAnswerModal
        isVisible={isModalWrongVisible}
        onPressNegativeButton={addWordOnPress}
        onPressPositiveButton={closeModalWrongAndContinue}
        alertMessageText={item.englishWords.join(",")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignSelf: "center",
    ...Platform.select({
      ios: {
        marginRight: "5%",
        marginTop: "6%",
      },
      android: {
        marginRight: "15%",
      },
    }),
  },
});

export default WritingArea;
