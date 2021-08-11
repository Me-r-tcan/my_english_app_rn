import { createSlice } from "@reduxjs/toolkit";

import { apiCallBegan } from "./configuration/apiActions";

const slice = createSlice({
  name: "finishedSubjectOptions",
  initialState: {
    loading: false,
  },
  reducers: {
    finishedSubjectOptionsRequested: (finishedSubjectOptions) => {
      finishedSubjectOptions.loading = true;
    },
    finishedSubjectOptionsReceived: (finishedSubjectOptions, action) => {
      finishedSubjectOptions.loading = false;
    },
    finishedSubjectOptionsRequestFailed: (finishedSubjectOptions, action) => {
      finishedSubjectOptions.loading = false;
    },
  },
});

const {
  finishedSubjectOptionsRequested,
  finishedSubjectOptionsReceived,
  finishedSubjectOptionsRequestFailed,
} = slice.actions;
export default slice.reducer;

const url = "/finished-subject-options";

export const finishSubjectOption = (subjectOptionId, difficulty) =>
  apiCallBegan({
    url,
    method: "post",
    data: {
      subjectOptionId: subjectOptionId,
      difficulty: difficulty,
    },
    successMessage: "Kelimeler alıştırması başarılı bir şekilde yapıldı.",
    onStart: finishedSubjectOptionsRequested.type,
    onSuccess: finishedSubjectOptionsReceived.type,
    onError: finishedSubjectOptionsRequestFailed.type,
  });
