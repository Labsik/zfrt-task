import { combineReducers } from "redux";
import { photosReducer } from "../containers/Photos/store";

export const rootReducer = combineReducers({
  photosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
