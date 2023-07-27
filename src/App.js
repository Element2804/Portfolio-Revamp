import "./App.css";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";


import NavTabs from "./components/NavTabs";
// pages
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";

const router = createBrowserRouter(
  createRoutesFromElements(

<Route path="/" element={<NavTabs/>} >
  <Route index element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="portfolio" element={<Portfolio/>}/>
  <Route path="resume" element={<Resume/>}/>
</Route>
  )
)

	
const App = () => {
  return (  
     
   
   <RouterProvider router={router}/>
  
   );
}
 
export default App;


