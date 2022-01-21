//No backend considered here.... just static front end
const Products = () => {
  return (
    <div className="row">
      <div className="col-xsm-12 col-sm-6 col-md-6 col-lg-6">
        <div className="product-transform"></div>
      </div>
      <div className="col-xsm-12 col-sm-6 col-md-6 col-lg-6">
        <div className="transform">
          <div className="transform-text">
            <h1>Transform your brand </h1>
            <p>
              The quick brown fox jumps over the lazy dog The quick brown fox
              jumps over the lazy dog The quick brown fox jumps over the lazy
              dog.
              <a className="info-link" href="#">
                Learn More
              </a>
              <div className="info-link-border "></div>
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-xsm-12 col-sm-6 col-md-6 col-lg-6"
        style={{ float: "left" }}
      >
        <div className="product-standout"></div>
      </div>
      <div
        className="col-xsm-12 col-sm-6 col-md-6 col-lg-6"
        style={{ float: "right" }}
      >
        <div className="transform">
          <div className="transform-text">
            <h1>Standout to the right audience </h1>
            <p>
              The quick brown fox jumps over the lazy dog The quick brown fox
              jumps over the lazy dog The quick brown fox jumps over the lazy
              dog
            </p>
            <a className="info-link" href="#">
              Learn More
            </a>
            <span className="info-link-border "></span>
          </div>
        </div>
      </div>

      <div className="col-xsm-12 col-sm-6 col-md-6 col-lg-6 ">
        <div className="product-photography">
          <div className="transform" style={{ "margin-top": "200px" }}>
            <div className="transform-text">
              <h1>potography </h1>
              <p>
                The quick brown fox jumps over the lazy dog The quick brown fox
                jumps over the lazy dog The quick brown fox jumps over the lazy
                dog
              </p>
              <a className="info-link" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xsm-12 col-sm-6 col-md-6 col-lg-6 ">
        <div className="product-grapchic">
          <div className="transform" style={{ "margin-top": "200px" }}>
            <div className="transform-text">
              <h1>Graphic Design</h1>
              <p>
                The quick brown fox jumps over the lazy dog The quick brown fox
                jumps over the lazy dog The quick brown fox jumps over the lazy
                dog
              </p>
              <a className="info-link" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
