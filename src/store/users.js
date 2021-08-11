import { createSlice } from "@reduxjs/toolkit";

import { apiCallBegan } from "./configuration/apiActions";

const slice = createSlice({
  name: "users",
  initialState: {
    user: null,
    loading: false,
    isSuccessfullyRegistered: false,
    errorMessage: "",
  },
  reducers: {
    usersRequested: (users) => {
      users.loading = true;
      users.isSuccessfullyRegistered = false;
      users.errorMessage = "";
    },
    usersReceived: (users, action) => {
      users.user = action.payload;
      users.loading = false;
      users.errorMessage = "";
    },
    usersRequestFailed: (users, action) => {
      users.loading = false;
      users.errorMessage = action.payload;
      users.isSuccessfullyRegistered = false;
    },
    userAdded: (users, action) => {
      users.user = action.payload;
      users.loading = false;
      users.isSuccessfullyRegistered = true;
      users.errorMessage = "";
    },
  },
});

const { usersRequested, usersReceived, usersRequestFailed, userAdded } =
  slice.actions;
export default slice.reducer;

const url = "/users";

export const register = ({ username, email, password, notifications }) =>
  apiCallBegan({
    url,
    method: "post",
    data: {
      username,
      email,
      password,
      notifications,
    },
    onStart: usersRequested.type,
    onSuccess: userAdded.type,
    onError: usersRequestFailed.type,
  });

export const userProfile = () =>
  apiCallBegan({
    url: `${url}/me`,
    onStart: usersRequested.type,
    onSuccess: usersReceived.type,
    onError: usersRequestFailed.type,
  });
