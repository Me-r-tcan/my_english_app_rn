import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import AppCard from "../AppCard";
import AppButton from "../AppButton";

import { getWordsExceptedWordId } from "../../store/words";

const TOTAL_FIELD_COUNT = 4;

const WordSelectForm = ({ handleSubmit, trueItem }) => {
  const [selectableList, setselectableList] = useState([]);

  const words = useSelector(getWordsExceptedWordId(trueItem._id));

  const generateRandomAndGetWords = () => {
    const selectableWordArr = [];
    const initialWordIndex = Math.floor(Math.random() * TOTAL_FIELD_COUNT);

    selectableWordArr[initialWordIndex] = trueItem;

    // uniqe değerler tutması için set kullanıldı
    const randomNumbers = new Set();
    while (randomNumbers.size !== TOTAL_FIELD_COUNT) {
      randomNumbers.add(Math.floor(Math.random() * words.length));
    }

    const randomNumbersArr = Array.from(randomNumbers);

    for (var i = 0; i < TOTAL_FIELD_COUNT; i++) {
      // Random number 1 tane fazla oluşturuldugu için 1 tanesini atlamak sorun yaratmadı
      if (i === initialWordIndex) continue;

      selectableWordArr[i] = words[randomNumbersArr[i]];
    }

    return selectableWordArr;
  };

  useEffect(() => {
    const selectableWordArr = generateRandomAndGetWords();
    setselectableList(selectableWordArr);
  }, [trueItem]);

  return (
    <AppCard style={{ flex: 0.7 }}>
      {selectableList.map((word, i) => {
        return (
          <AppButton
            title={`${word.turkishWords.toString()}`}
            key={word._id}
            onPress={() => handleSubmit(word._id)}
          />
        );
      })}
    </AppCard>
  );
};

export default WordSelectForm;
