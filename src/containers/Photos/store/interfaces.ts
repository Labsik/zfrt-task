export interface IPhoto {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface IPageOpt {
  perPage: number | null;
  currentPage: number | null;
  totalCount: number | null;
}

export interface IAlbumOpt {
  albumId: number | null;
}

export interface ISearchOpt {
  searchQ: string;
}

export interface IPhotosState {
  photosArr: IPhoto[] | null;
  isLoading: boolean;
  error: null | string;
  albumsArr: IAlbum[] | null;
  filteredPhotoArr: IPhoto[] | null;
  pageOpt: IPageOpt | any;
  albumOpt: IAlbumOpt | any;
  searchOpt: ISearchOpt | any;
}
