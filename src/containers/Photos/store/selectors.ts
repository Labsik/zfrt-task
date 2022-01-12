import { IPhotosState } from "./interfaces";
import { createSelector } from "reselect";

interface IAppState {
  photosReducer: IPhotosState;
}

export const selectPhotos = (state: IAppState) => state.photosReducer;

export const getPhotos = () => createSelector(selectPhotos, (state) => state.photosArr);
export const getAlbums = () => createSelector(selectPhotos, (state) => state.albumsArr);

export const getPhotosPage = () => createSelector(selectPhotos, (state) => state.pageOpt);
export const getPhotosByAlbum = () => createSelector(selectPhotos, (state) => state.albumOpt);
export const getPhotosSearch = () => createSelector(selectPhotos, (state) => state.searchOpt);

export const getFilteredPhotos = () => createSelector(selectPhotos, (state) => state.filteredPhotoArr);

export const getLoader = () => createSelector(selectPhotos, (state) => state.isLoading);
export const getError = () => createSelector(selectPhotos, (state) => state.error);
