import { IPhoto } from "../../store";

const PhotoCard = (photo: IPhoto) => (
  <div className="col-sm-6 col-md-12 col-lg-4" key={photo.id}>
    <div className="card m-2">
      <img className="img-thumbnail" src={photo.thumbnailUrl} alt="imgthumbnailUrl" />

      <div className="card-body">
        <h5 className="card-title"> {photo.title}</h5>

        <p className="card-text">Album ID: {photo.albumId}</p>
      </div>
    </div>
  </div>
);

export default PhotoCard;
