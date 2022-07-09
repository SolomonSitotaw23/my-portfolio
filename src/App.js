import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe.jsx";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import { Element } from "react-scroll";
function App() {
  const scrollRef = useRef(0);
  const secNum = useScrollSnap({ ref: scrollRef, duration: 100, delay: 5 });
  return (
    <section ref={scrollRef}>
      <Header secNum={secNum} />
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
  );
}
export default App;
