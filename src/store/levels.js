import { createSlice } from "@reduxjs/toolkit";

import { apiCallBegan } from "./configuration/apiActions";

const slice = createSlice({
  name: "levels",
  initialState: {
    levels: [],
    loading: false,
    errorMessage: "",
  },
  reducers: {
    levelsRequested: (levels) => {
      levels.loading = true;
      levels.errorMessage = "";
    },
    levelsReceived: (levels, action) => {
      levels.levels = action.payload;
      levels.loading = false;
      levels.errorMessage = "";
    },
    levelsRequestFailed: (levels, action) => {
      levels.loading = false;
      levels.errorMessage = action.payload;
    },
  },
});

const { levelsRequested, levelsReceived, levelsRequestFailed } = slice.actions;
export default slice.reducer;

const url = "/levels";

export const loadLevels = () =>
  apiCallBegan({
    url: `${url}`,
    onStart: levelsRequested.type,
    onSuccess: levelsReceived.type,
    onError: levelsRequestFailed.type,
  });
