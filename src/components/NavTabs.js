import { NavLink, Outlet } from "react-router-dom";


const NavTabs = () => {
  return ( 
    <section className="nav-tabs">
    <header>
       <nav>
         <h1>William Faries</h1>
         <NavLink to ="/">About</NavLink>
         <NavLink to="portfolio">Portfolio</NavLink>
         <NavLink to="contact">Contact</NavLink>
       <NavLink to="resume">Resume</NavLink>
      </nav>
     </header>
    <main>
      <Outlet/>
    </main>
    </section>
   );
}
 
export default NavTabs ;