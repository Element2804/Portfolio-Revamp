import {FaGithub, FaStackOverflow} from "react-icons/fa"

const Footer = () => {
    return (
        <section className="footer">
            <footer>
                <FaGithub className="github"/>
                <FaStackOverflow className="stack"/>
            </footer>


        </section>
      );
}
 
export default Footer;