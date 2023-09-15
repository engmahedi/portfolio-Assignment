import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";




const Home = () => {
  return (
    <div>
      {/* <Menu /> */}
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;