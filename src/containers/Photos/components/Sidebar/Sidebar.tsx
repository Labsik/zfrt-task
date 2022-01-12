import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAlbumsRequest, filterByAlbum, searchByPhoto, setCurrentPage } from "../../store/actions";
import { getAlbums, getLoader, getPhotosByAlbum, getPhotosSearch } from "../../store/selectors";
import CustomButton from "../CustomButton/CustomButton";
import { IAlbum } from "../../store";

const Sidebar = () => {
  const dispatch = useDispatch();
  const albumsArr = useSelector(getAlbums());
  const { searchQ } = useSelector(getPhotosSearch());
  const isLoading = useSelector(getLoader());

  const { albumId } = useSelector(getPhotosByAlbum());

  const changeAlbum = (id: number) => {
    dispatch(filterByAlbum(id));
    dispatch(searchByPhoto(searchQ));
    window.scrollTo(0, 0);
  };

  const albumList = albumsArr?.map((a: IAlbum) => (
    <li key={a.id} className={`list-group-item ${a.id === albumId && "active"}`} onClick={() => changeAlbum(a.id)}>
      {a.title}
    </li>
  ));

  useEffect(() => {
    dispatch(fetchAlbumsRequest());
  }, [dispatch]);

  const onClB = () => {
    dispatch(setCurrentPage(1));
    dispatch(filterByAlbum(null));
    dispatch(searchByPhoto(""));
  };

  return (
    <div>
      {isLoading ? null : (
        <>
          <h5>Search by album </h5>
          {typeof albumId === "number" && <CustomButton onClB={onClB} />}

          <ul className="list-group mt-2">{albumList}</ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
