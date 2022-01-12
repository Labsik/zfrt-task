import * as constants from "./constants";
import { IPhoto, IAlbum } from "./interfaces";

export const fetchPhotosRequest = () => ({ type: constants.FETCH_PHOTOS_REQUEST });
export const fetchPhotosSuccess = (payload: IPhoto[]) => ({ type: constants.FETCH_PHOTOS_SUCCESS, payload });
export const fetchPhotosFailure = (err: string) => ({ type: constants.FETCH_PHOTOS_FAILURE, payload: err });

export const fetchPhotosByAlbumRequest = () => ({ type: constants.FETCH_FILTER_PHOTOS_REQUEST });
export const fetchPhotosByAlbumSuccess = (payload: IPhoto[]) => ({
  type: constants.FETCH_FILTER_PHOTOS_SUCCESS,
  payload,
});
export const fetchPhotosByAlbumFailure = (err: string) => ({
  type: constants.FETCH_FILTER_PHOTOS_FAILURE,
  payload: err,
});

export const fetchAlbumsRequest = () => ({ type: constants.FETCH_ALBUMS_REQUEST });
export const fetchAlbumsSuccess = (payload: IAlbum[]) => ({ type: constants.FETCH_ALBUMS_SUCCESS, payload });
export const fetchAlbumsFailure = (err: string) => ({ type: constants.FETCH_ALBUMS_FAILURE, payload: err });

export const setCurrentPage = (page: number) => ({ type: constants.SET_CURRENT_PAGE, payload: page });
export const filterByAlbum = (albumId: number | null) => ({ type: constants.FILTER_BY_ALBUM, payload: albumId });
export const searchByPhoto = (err: string) => ({ type: constants.SEARCH_BY_PHOTO, payload: err });
