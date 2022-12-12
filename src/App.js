import "./App.css";
import Content from "./components/Content";
import Events from "./components/Events";
import FloatingSocialIcons from "./components/FloatingSocialIcons";
import Footer from "./components/Footer";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Sponsors from "./components/Sponsors";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "./components/Contact";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Navbar />
      <FloatingSocialIcons />

      <Background />

      <main className="App">
        <ParallaxProvider>
          <Home />
        </ParallaxProvider>
        <Content />
        <Events />
        {/* <Sponsors /> */}
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
