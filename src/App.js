import "./emant.style.css";

// Components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Clients from "./components/Clients/Clients";
import ImageGallery from "./components/Gallery/ImageGallery";

function App() {
  return (
    <div>
      <Header />
      <Banner motto={"We are creatives"} />
      <Products />
      <Clients />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
