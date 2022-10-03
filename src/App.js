import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe.jsx";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Loading from "./Loading";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return !isLoading ? (
    <section>
      <Header />
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="aboutMe" className="element">
        <AboutMe />
      </Element>
      <Element name="education" className="element">
        <Education />
      </Element>
      <Element name="project" className="element">
        <Projects />
      </Element>
      <Element name="contactMe" className="element">
        <ContactMe />
      </Element>
      <Element name="footer" className="element">
        <Footer />
      </Element>
    </section>
  ) : (
    <Loading />
  );
}
export default App;
