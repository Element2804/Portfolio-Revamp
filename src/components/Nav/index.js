import React from "react";
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav>
            <h1>William Faries</h1>
            <Link to='/'>About</Link>
            <Link to='portfolio'>Portfolio</Link>
            <Link to='contact'>Contact</Link>
            <Link to='resume'>Resume</Link>
        </nav>
    )

}

export default Nav;