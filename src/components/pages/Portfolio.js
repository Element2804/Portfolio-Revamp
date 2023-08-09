import React from "react";
import personnel from "../../images/Personnel.png"
import pwGen from "../../images/PWgen.png"
import gulp from "../../images/Gulpco.png"

const Portfolio = () => {
    return (
        <section>
            <h2>Portfolio</h2>
            <div className="portfolio">
                <a href="https://github.com/Element2804/Personnel-Tracker">
                <img src ={personnel} className="person" alt="personnel tracker"/>
                </a>
               <a href="https://github.com/Element2804/pink-kittens">
                <img src ={pwGen} className="person" alt="password generator"/>
                </a>
               <a href="https://gulpco-9498db2ffc8b.herokuapp.com/">
                <img src ={gulp} className="person" alt="drink ordering website"/>
                </a>

            </div>
        </section>
        
        
        );
}
 
export default Portfolio ;