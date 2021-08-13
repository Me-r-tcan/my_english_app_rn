import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "confirmations",
  initialState: {
    BackConfirmationOpen: false,
  },
  reducers: {
    openBackConfirmation: (confirmations) => {
      confirmations.BackConfirmationOpen = true;
    },
    closeBackConfirmation: (confirmations) => {
      confirmations.BackConfirmationOpen = false;
    },
  },
});

export const { openBackConfirmation, closeBackConfirmation } = slice.actions;
export default slice.reducer;
