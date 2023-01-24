import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import './App.css';
import Loader from './components/loader/Loader';
import Content from './components/about/Content';
import Events from './components/events/Events';
import FloatingSocialIcons from './components/layout/FloatingSocialIcons';
import Footer from './components/layout/Footer';
import Gallery from './components/gallery/Gallery';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
// import Sponsors from "./components/sponsors/Sponsors";
import Contact from './components/contact/Contact';
import Background from './components/layout/Background';
import AOS from 'aos';
import Alumni from './components/alumni/Alumni';
import { updateScrollPosition } from './utils/scroll';
import SpecialEvents from './components/events/SpecialEvents';
import Sponsors from './components/sponsors/Sponsors';
import Instareel from './components/aftermovie/Instareel';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 600
    });

    // const timer = setTimeout(() => {
    //   setLoaded(true);
    // }, 1500);

    // return () => {
    //   clearTimeout(timer);
    // };
  }, []);

  useEffect(() => {
    const handler = () => {
      setTimeout(() => {
        setLoading(false);
        updateScrollPosition();
      }, 1500);
    };

    if (document.readyState === 'complete') {
      handler();
    } else {
      window.addEventListener('load', handler);

      return () => {
        window.addEventListener('load', handler);
      };
    }
  }, []);

  return (
    <>
      {loading && <Loader />}

      <Navbar />
      <FloatingSocialIcons />

      <Background />

      <main className='App'>
        <Home />
        <Content />
        <Events />
        <SpecialEvents />
        <Alumni />
        <Gallery />
        <Sponsors />
        <Instareel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
