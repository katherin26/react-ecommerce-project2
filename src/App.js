import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import About from "./views/About/About";
import ContactMe from "./views/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
