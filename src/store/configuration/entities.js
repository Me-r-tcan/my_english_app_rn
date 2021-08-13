import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../auth";
import usersReducer from "../users";
import subjectsReducer from "../subjects";
import subjectOptionsReducer from "../subjectOptions";
import levelsReducer from "../levels";
import wordsReducer from "../words";
import myWordListsReducer from "../myWordLists";
import finishedSubjectOptionsReducer from "../finishedSubjectOptions";
import generalInfoReducer from "../generalInfo";
import confirmationsReducer from "../confirmations";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  subjects: subjectsReducer,
  subjectOptions: subjectOptionsReducer,
  levels: levelsReducer,
  words: wordsReducer,
  myWordLists: myWordListsReducer,
  finishedSubjectOptions: finishedSubjectOptionsReducer,
  generalInfo: generalInfoReducer,
  confirmations: confirmationsReducer,
});
