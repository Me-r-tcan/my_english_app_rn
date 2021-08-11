import { createSlice } from "@reduxjs/toolkit";

import { apiCallBegan } from "./apiActions";

const slice = createSlice({
  name: "subjects",
  initialState: {
    subjects: [],
    loading: false,
    errorMessage: "",
  },
  reducers: {
    subjectsRequested: (subjects) => {
      subjects.loading = true;
      subjects.errorMessage = "";
    },
    subjectsReceived: (subjects, action) => {
      subjects.subjects = action.payload;
      subjects.loading = false;
      subjects.errorMessage = "";
    },
    subjectsRequestFailed: (subjects, action) => {
      subjects.loading = false;
      subjects.errorMessage = action.payload;
    },
  },
});

const {
  subjectsRequested,
  subjectsReceived,
  subjectsRequestFailed,
} = slice.actions;
export default slice.reducer;

const url = "/subjects";

export const loadSubjects = (level) =>
  apiCallBegan({
    url: `${url}`,
    params: { level: level },
    onStart: subjectsRequested.type,
    onSuccess: subjectsReceived.type,
    onError: subjectsRequestFailed.type,
  });
