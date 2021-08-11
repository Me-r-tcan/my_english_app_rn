import { createSlice } from "@reduxjs/toolkit";

import { apiCallBegan } from "./apiActions";

const slice = createSlice({
  name: "myWordLists",
  initialState: {
    myWordList: [],
    loading: false,
    errorMessage: "",
  },
  reducers: {
    myWordListsRequested: (myWordLists) => {
      myWordLists.loading = true;
      myWordLists.errorMessage = "";
    },
    myWordListsReceived: (myWordLists, action) => {
      myWordLists.myWordList = action.payload;
      myWordLists.loading = false;
      myWordLists.errorMessage = "";
    },
    myWordListsRequestFailed: (myWordLists, action) => {
      myWordLists.loading = false;
      myWordLists.errorMessage = action.payload;
    },
  },
});

const {
  myWordListsRequested,
  myWordListsReceived,
  myWordListsRequestFailed,
} = slice.actions;
export default slice.reducer;

const url = "/my-word-lists";

export const loadMyWordList = () =>
  apiCallBegan({
    url,
    onStart: myWordListsRequested.type,
    onSuccess: myWordListsReceived.type,
    onError: myWordListsRequestFailed.type,
  });

export const addWordToMyList = (wordId) =>
  apiCallBegan({
    url,
    method: "post",
    data: {
      wordId: wordId,
    },
    successMessage: "Kelimelerim listene eklendi.",
    onStart: myWordListsRequested.type,
    onSuccess: myWordListsReceived.type,
    onError: myWordListsRequestFailed.type,
  });
