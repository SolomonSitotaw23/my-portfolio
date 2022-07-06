import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe.jsx";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
function App() {
  const scrollRef = useRef(0);
  const secNum = useScrollSnap({ ref: scrollRef, duration: 10, delay: 5 });
  console.log(secNum);
  return (
    <section ref={scrollRef}>
      <Header secNum={secNum} />
      <Home />
      <AboutMe />
      <Education />
      <Projects />
      <ContactMe />
      <Footer />
    </section>
  );
}
export default App;
