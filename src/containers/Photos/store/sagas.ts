import { IPhoto, IAlbum } from "./interfaces";
import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";

import { albumsURL, photosURL } from "../../../api";
import * as actions from "./actions";
import * as constants from "./constants";
import { getPhotosByAlbum, getPhotosPage, getPhotosSearch } from "./selectors";

function* fetchPhotosSaga() {
  try {
    const { currentPage, perPage } = yield select(getPhotosPage());
    const { searchQ } = yield select(getPhotosSearch());

    const { data }: { data: IPhoto[] } = yield call(() =>
      axios.get(`${photosURL}?_page=${currentPage}&_limit=${perPage}&q=${searchQ}`),
    );
    yield put(actions.fetchPhotosSuccess(data));
  } catch (error) {
    yield put(actions.fetchPhotosFailure(error as string));
  }
}

function* fetchFilteredPhotosByAlbumSaga() {
  try {
    const { albumId } = yield select(getPhotosByAlbum());
    const { searchQ } = yield select(getPhotosSearch());

    const { data }: { data: IPhoto[] } = yield call(() => axios.get(`${albumsURL}/${albumId}/photos?q=${searchQ}`));
    yield put(actions.fetchPhotosByAlbumSuccess(data));
  } catch (error) {
    yield put(actions.fetchPhotosByAlbumFailure(error as string));
  }
}

function* fetchAlbumsSaga() {
  try {
    const { data }: { data: IAlbum[] } = yield call(() => axios.get(`${albumsURL}`));
    yield put(actions.fetchAlbumsSuccess(data));
  } catch (error) {
    yield put(actions.fetchAlbumsFailure(error as string));
  }
}

export const photosSaga = function* () {
  yield takeLatest(constants.FETCH_PHOTOS_REQUEST, fetchPhotosSaga);
  yield takeLatest(constants.FETCH_FILTER_PHOTOS_REQUEST, fetchFilteredPhotosByAlbumSaga);
  yield takeLatest(constants.FETCH_ALBUMS_REQUEST, fetchAlbumsSaga);
};
