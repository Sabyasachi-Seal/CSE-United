import "./App.css";
import Content from "./components/Content";
import Events from "./components/Events";
import FloatingSocialIcons from "./components/FloatingSocialIcons";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <Navbar />
      <FloatingSocialIcons />

      <main className="App">
        <Home />
        <Content />
        <Events />
        <Sponsors />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}

export default App;
