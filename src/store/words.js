import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

import { apiCallBegan } from "./configuration/apiActions";

const slice = createSlice({
  name: "words",
  initialState: {
    words: [],
    loading: false,
    errorMessage: "",
  },
  reducers: {
    wordsRequested: (words) => {
      words.loading = true;
      words.errorMessage = "";
    },
    wordsReceived: (words, action) => {
      words.words = action.payload;
      words.loading = false;
      words.errorMessage = "";
    },
    wordCopyAndPush: (words, action) => {
      const index = words.words.findIndex(
        (word) => word._id === action.payload
      );

      const copyWord = Object.assign({}, words.words[index]);
      copyWord.key = uuidv4();

      words.words.push(copyWord);

      words.loading = false;
      words.errorMessage = "";
    },
    wordsRequestFailed: (words, action) => {
      words.loading = false;
      words.errorMessage = action.payload;
    },
  },
});

const { wordsRequested, wordsReceived, wordsRequestFailed } = slice.actions;
export const { wordCopyAndPush } = slice.actions;
export default slice.reducer;

const url = "/words";

export const loadWords = (id, progress) =>
  apiCallBegan({
    url: `${url}/by-subject/${id}`,
    params: { progress },
    onStart: wordsRequested.type,
    onSuccess: wordsReceived.type,
    onError: wordsRequestFailed.type,
  });
