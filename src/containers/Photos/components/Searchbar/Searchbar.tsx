import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPhotosByAlbumRequest,
  fetchPhotosRequest,
  filterByAlbum,
  searchByPhoto,
  setCurrentPage,
} from "../../store/actions";
import { getPhotosByAlbum } from "../../store/selectors";
import CustomButton from "../CustomButton/CustomButton";
import "./Searchbar.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const { albumId } = useSelector(getPhotosByAlbum());
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = () => {
    dispatch(setCurrentPage(1));
    dispatch(searchByPhoto(searchValue));
    if (typeof albumId !== "number") {
      dispatch(fetchPhotosRequest());
    } else {
      dispatch(fetchPhotosByAlbumRequest());
    }
  };

  const cancelSearchHandler = () => {
    dispatch(setCurrentPage(1));
    dispatch(searchByPhoto(""));
    setSearchValue("");

    if (typeof albumId !== "number") {
      dispatch(fetchPhotosRequest());
    } else {
      dispatch(fetchPhotosByAlbumRequest());
    }
  };

  const onClB = () => {
    dispatch(setCurrentPage(1));
    dispatch(filterByAlbum(null));
    dispatch(searchByPhoto(""));
    dispatch(fetchPhotosRequest());
    setSearchValue("");
  };

  return (
    <div className="input-group input-custom mb-3 ">
      <input
        type="text"
        className="form-control"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search photo by title"
        aria-describedby="button-addon2"
      />
      <div className="input-group-append">
        <button
          onClick={searchHandler}
          className="btn btn-success"
          type="button"
          disabled={searchValue === ""}
          id="button-addon2"
        >
          Search
        </button>
        {searchValue !== "" && (
          <>
            <button className="btn btn-warning" onClick={cancelSearchHandler}>
              cancel search
            </button>
            <CustomButton onClB={onClB} />
          </>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
