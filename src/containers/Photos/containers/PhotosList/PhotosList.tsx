import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPages } from "../../utils";
import { Loader, Pagination, PhotoCard, Searchbar } from "../../components";
import { fetchPhotosByAlbumRequest, fetchPhotosRequest } from "../../store/actions";
import {
  getError,
  getFilteredPhotos,
  getLoader,
  getPhotos,
  getPhotosByAlbum,
  getPhotosPage,
  getPhotosSearch,
} from "../../store/selectors";

import { IPhoto } from "../../store";
import "./PhotosList.css";

const PhotosList = () => {
  const photosArr = useSelector(getPhotos());
  const filteredPhotoArr = useSelector(getFilteredPhotos());
  const isLoading = useSelector(getLoader());
  const isError = useSelector(getError());

  const { currentPage, perPage, totalCount } = useSelector(getPhotosPage());
  const { albumId } = useSelector(getPhotosByAlbum());
  const { searchQ } = useSelector(getPhotosSearch());

  console.log("albId:", albumId, albumId === null, typeof albumId === "number");
  console.log("currentPage:", currentPage, perPage, totalCount);

  const dispatch = useDispatch();
  const pages: Array<number> = [];
  const totalCountPages = albumId !== null ? 1 : totalCount;
  const pagesCount = Math.ceil(totalCountPages / perPage);

  const photosArrList = photosArr?.map((photo: IPhoto) => <PhotoCard key={photo.id} {...photo} />);
  const photosFilteredArrList = filteredPhotoArr?.map((photo: IPhoto) => <PhotoCard key={photo.id} {...photo} />);

  createPages(pages, pagesCount, currentPage);

  console.log("pages", pages);

  useEffect(() => {
    if (typeof albumId !== "number") {
      dispatch(fetchPhotosRequest());
    } else {
      dispatch(fetchPhotosByAlbumRequest());
    }
  }, [dispatch, currentPage, searchQ, albumId]);

  return (
    <div className="photos-container">
      <Searchbar />
      <div className="row ">
        {(photosArrList?.length === 0 || photosFilteredArrList?.length === 0) && !isError && !isLoading ? (
          <h5 className="text-center ml-4">No posts due to search</h5>
        ) : null}

        {!isLoading && typeof albumId !== "number" ? photosArrList : photosFilteredArrList}
        {isError && <h5 className="text-center ml-4">Oops something wrong with the server</h5>}
      </div>
      {isLoading && <Loader />}
      {!isLoading && pages?.length > 1 && <Pagination pages={pages} currentPage={currentPage} />}
    </div>
  );
};

export default PhotosList;
