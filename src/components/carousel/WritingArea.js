import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";

import { AppForm, AppFormField, SubmitButton } from "../formElements";
import ProgressBar from "./ProgressBar";
import WrongAnswerModal from "../modals/WrongAnswerModal";
import validationSchema from "../../validationSchemas/word";

import { updateGeneralInfo } from "../../store/generalInfo";
import { wordCopyAndPush } from "../../store/words";

const numberOfLines = 4;

const WritingArea = ({ item, scrollTo, percentage, addWordOnPress }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isModalWrongVisible, setIsModalWrongVisible] = useState(false);

  const closeModalWrongAndContinue = () => {
    setIsModalWrongVisible(false);
    scrollTo();
  };

  const windowWidth = useWindowDimensions().width;

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
      <KeyboardAvoidingView
        style={{ width: windowWidth }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <AppForm
          initialValues={{
            word: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Kelimeyi Yazınız.'
            keyboardType='default'
            name='word'
            textContentType='name'
            multiline
            numberOfLines={Platform.OS === "ios" ? null : numberOfLines}
            minHeight={
              Platform.OS === "ios" && numberOfLines ? 20 * numberOfLines : null
            }
          />

          <SubmitButton title='KONTROL ET' color='success' />
        </AppForm>
      </KeyboardAvoidingView>

      {/* Yazılan cevabın görünmesi için alan ittirildi. */}
      {isModalWrongVisible && <View style={{ marginBottom: "50%" }} />}

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
