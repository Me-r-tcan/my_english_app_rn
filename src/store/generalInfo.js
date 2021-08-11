import { createSlice } from "@reduxjs/toolkit";
import { addMinutes, parseISO, formatDistanceToNowStrict } from "date-fns";

import { apiCallBegan } from "./apiActions";

const LIFE_INCREASE_MINUTE = 2;

const slice = createSlice({
  name: "generalInfo",
  initialState: {
    life: 0,
    lifeTimestamp: null,
    remainingTime: "-",
    diamond: 0,
    loading: false,
    errorMessage: "",
  },
  reducers: {
    generalInfoRequested: (generalInfo) => {
      generalInfo.loading = true;
      generalInfo.errorMessage = "";
    },
    generalInfoReceived: (generalInfo, action) => {
      generalInfo.diamond = action.payload.diamond;
      generalInfo.lifeTimestamp = action.payload.lifeTimestamp;

      if (generalInfo.life !== 5) {
        generalInfo.remainingTime = formatDistanceToNowStrict(
          addMinutes(
            parseISO(action.payload.lifeTimestamp),
            LIFE_INCREASE_MINUTE
          ),
          { addSuffix: false }
        );
      }

      generalInfo.life = action.payload.life;
      generalInfo.loading = false;
      generalInfo.errorMessage = "";
    },
    generalInfoRequestFailed: (generalInfo, action) => {
      generalInfo.loading = false;
      generalInfo.errorMessage = action.payload;
    },
  },
});

const {
  generalInfoRequested,
  generalInfoReceived,
  generalInfoRequestFailed,
} = slice.actions;
export default slice.reducer;

const url = "/general-info";

export const loadGeneralInfo = () =>
  apiCallBegan({
    url,
    onStart: generalInfoRequested.type,
    onSuccess: generalInfoReceived.type,
    onError: generalInfoRequestFailed.type,
  });

export const updateGeneralInfo = (values) =>
  apiCallBegan({
    url,
    method: "put",
    data: values,
    successMessage: values.life
      ? values.life > 0
        ? "Can kazanıldı."
        : null
      : values.diamond > 0
      ? "Elmas kazanıldı."
      : null,
    onStart: generalInfoRequested.type,
    onSuccess: generalInfoReceived.type,
    onError: generalInfoRequestFailed.type,
  });
