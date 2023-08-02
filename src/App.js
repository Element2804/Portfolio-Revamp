import {BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Footer from "./components/Footer";

// pages
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";




 

	
const App = () => {
  return (  
     <BrowserRouter>
     <header>
      <nav>
        <h1>William Faries</h1>
<NavLink to="/">About</NavLink>
<NavLink to="portfolio">Portfolio</NavLink>
<NavLink to="contact">Contact</NavLink>
<NavLink to="resume">Resume</NavLink>

      </nav>
     </header>
   <main>
    <Routes>
    <Route exact path="/" element={<About/>} />
    <Route path="contact" element={<Contact/>}/>
    <Route path="portfolio" element={<Portfolio/>}/>
    <Route path="resume" element={<Resume/>}/>
  </Routes>
  </main>
  <footer>
    <Footer/>
  </footer>
</BrowserRouter>

   
   
  
   );
}
 
export default App;


