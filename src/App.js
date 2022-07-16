import "./App.css";
import Navbar from "./views/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ContactMe from "./views/ContactMe/ContactMe";
import Dashboard from "./views/Dashboard/Dashboard";
import AboutUs from "./components/About/About";
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
      <Navbar />
      <Dashboard />
      <AboutUs />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
