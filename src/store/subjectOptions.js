import { createSlice } from "@reduxjs/toolkit";

import { apiCallBegan } from "./apiActions";

const slice = createSlice({
  name: "subjectOptions",
  initialState: {
    subjectOptions: [],
    loading: false,
    errorMessage: "",
  },
  reducers: {
    subjectOptionsRequested: (subjectOptions) => {
      subjectOptions.loading = true;
      subjectOptions.errorMessage = "";
    },
    subjectOptionsReceived: (subjectOptions, action) => {
      subjectOptions.subjectOptions = action.payload;
      subjectOptions.loading = false;
      subjectOptions.errorMessage = "";
    },
    subjectOptionsRequestFailed: (subjectOptions, action) => {
      subjectOptions.loading = false;
      subjectOptions.errorMessage = action.payload;
    },
    progressUpdated: (subjectOptions, action) => {
      const index = subjectOptions.subjectOptions.findIndex(
        (subjectOption) => subjectOption._id === action.payload
      );
      let addProgress = 33;
      if (subjectOptions.subjectOptions[index].progress == 66) {
        addProgress = 34;
      }
      subjectOptions.subjectOptions[index].progress += addProgress;
    },
  },
});

const {
  subjectOptionsRequested,
  subjectOptionsReceived,
  subjectOptionsRequestFailed,
} = slice.actions;
export const { progressUpdated } = slice.actions;
export default slice.reducer;

const url = "/subject-options";

export const loadSubjectOptions = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    onStart: subjectOptionsRequested.type,
    onSuccess: subjectOptionsReceived.type,
    onError: subjectOptionsRequestFailed.type,
  });
