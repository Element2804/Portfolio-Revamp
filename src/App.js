import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//nav
import Nav from './components/Nav/index.js'

// footer component import
import Footer from "./components/Footer";
// page imports
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";

const App = () => {
  return (
    <Router>
      <header>
     <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/Portfolio-Revamp" element={<About />} />
          <Route path="/" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
