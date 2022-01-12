import { all } from "redux-saga/effects";
import { photosSaga } from "../containers/Photos/store";

export default function* rootSaga() {
  yield all([photosSaga()]);
}
