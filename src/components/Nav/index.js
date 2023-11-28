import React from "react";
import { NavLink } from 'react-router-dom'
import "./style.css"


const Nav = () => {
    return (
        <nav>
            <h1>William Faries</h1>
           
            <NavLink to='/'>About</NavLink>
            <NavLink to='portfolio'>Portfolio</NavLink>
            <NavLink to='contact'>Contact</NavLink>
            <NavLink to='resume'>Resume</NavLink>
        </nav>
    )

}

export default Nav;