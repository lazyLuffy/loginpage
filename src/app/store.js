import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";

import {combineReducers} from "redux"
const reducer = combineReducers({
  user:userSlice,
});
export const store = configureStore({
  reducer
});
