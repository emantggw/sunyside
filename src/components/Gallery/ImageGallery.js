import cone from "../../images/image-gallery-cone.jpg";
import orange from "../../images/image-gallery-orange.jpg";
import bottles from "../../images/image-gallery-milkbottles.jpg";
import cube from "../../images/image-gallery-sugarcubes.jpg";

const ImageGallery = () => {
  return (
    <div className="row">
      <div className="col-xsm-6 col-sm-6 col-md-3 col-lg-3">
        <img src={cube} />
      </div>
      <div className="col-xsm-6 col-sm-6 col-md-3 col-lg-3">
        <img src={cone} />
      </div>
      <div className="col-xsm-6 col-sm-6 col-md-3 col-lg-3">
        <img src={orange} />
      </div>
      <div className="col-xsm-6 col-sm-6 col-md-3 col-lg-3">
        <img src={bottles} />
      </div>
    </div>
  );
};

export default ImageGallery;
