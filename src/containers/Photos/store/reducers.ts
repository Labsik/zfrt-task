import { Reducer as IReducer } from "redux";
import { IPhotosState } from "./interfaces";
import * as constants from "./constants";

const initialState: IPhotosState = {
  photosArr: [],
  isLoading: true,
  error: null,
  albumsArr: null,
  filteredPhotoArr: null,
  pageOpt: {
    perPage: 20,
    currentPage: 1,
    totalCount: 5000,
  },
  albumOpt: {
    albumId: null,
  },
  searchOpt: {
    searchQ: "",
  },
};

export const photosReducer: IReducer<IPhotosState> = (state: IPhotosState = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_PHOTOS_REQUEST:
    case constants.FETCH_ALBUMS_REQUEST:
    case constants.FETCH_FILTER_PHOTOS_REQUEST:
      return { ...state };
    case constants.FETCH_PHOTOS_FAILURE:
    case constants.FETCH_FILTER_PHOTOS_FAILURE:
    case constants.FETCH_ALBUMS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case constants.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        photosArr: action.payload,
      };
    case constants.FETCH_FILTER_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        filteredPhotoArr: action.payload,
      };
    case constants.FETCH_ALBUMS_SUCCESS:
      return { ...state, isLoading: false, albumsArr: action.payload };
    case constants.SET_CURRENT_PAGE:
      return {
        ...state,
        isLoading: false,
        pageOpt: { ...state.pageOpt, currentPage: action.payload },
      };
    case constants.FILTER_BY_ALBUM:
      return {
        ...state,
        isLoading: false,
        albumOpt: { ...state.albumOpt, albumId: action.payload },
      };
    case constants.SEARCH_BY_PHOTO:
      return {
        ...state,
        isLoading: false,
        searchOpt: { ...state.searchOpt, searchQ: action.payload },
      };
    default:
      return state;
  }
};
