import { useEffect } from 'react';
import './App.css';
import 'aos/dist/aos.css';
import Content from './components/about/Content';
import Events from './components/events/Events';
import FloatingSocialIcons from './components/layout/FloatingSocialIcons';
import Footer from './components/layout/Footer';
import Gallery from './components/gallery/Gallery';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
// import Sponsors from "./components/sponsors/Sponsors";
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from './components/contact/Contact';
import Background from './components/layout/Background';
import AOS from 'aos';

function App() {
  useEffect(() => {
    // initializing AOS Animations
    AOS.init({
      duration: 600
    });
  }, []);

  return (
    <>
      <Navbar />
      <FloatingSocialIcons />

      <Background />

      <main className='App'>
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
