import { NavLink, Outlet } from "react-router-dom";


const NavTabs = () => {
  return ( 
    <section className="nav-tabs">
    <header>
       <nav>
         <h1>William Faries</h1>
         <NavLink to ="/">Home</NavLink>
       <NavLink to="about">About</NavLink>
       <NavLink to="portfolio">About</NavLink>
       <NavLink to="resume">About</NavLink>
      </nav>
     </header>
    <main>
      <Outlet/>
    </main>
    </section>
   );
}
 
export default NavTabs ;