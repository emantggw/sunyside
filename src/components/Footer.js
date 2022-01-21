import fb from "../images/icon-facebook.svg";
import ig from "../images/icon-instagram.svg";
import pn from "../images/icon-pinterest.svg";
import tw from "../images/icon-twitter.svg";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-text">
        <h1>sunnyside</h1>
      </div>
      <div className="footer-links">
        <a>About</a>
        <a>Services</a>
        <a>Projects</a>
      </div>
      <div className="footer-social">
        <img src={fb} />
        <img src={ig} />
        <img src={pn} />
        <img src={tw} />
      </div>
    </div>
  );
};

export default Footer;
