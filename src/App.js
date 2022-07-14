import "./App.css";
import Header from "./components/Header/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import ContactMe from "./views/ContactMe/ContactMe";
import Dashboard from "./views/Dashboard/Dashboard";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faArrowLeft,
  faArrowRight,
  faP,
  faGifts,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faSun, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faInstagram,
  faWhatsapp,
  faFacebook,
  faDailymotion,
  faPinterestSquare,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faTwitter,
  faFontAwesome,
  faInstagram,
  faWhatsapp,
  faEnvelope,
  faFacebook,
  faArrowLeft,
  faArrowRight,
  faDailymotion,
  faP,
  faPinterestSquare,
  faPinterestP,
  faGifts,
  faSun,
  faStar
);

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Dashboard />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
