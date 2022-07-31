import "./header.css";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
let Header = () => {

    const textRed = {
        color:"red"
    }

    return (
        <header className={styles.header+" container-fluid bg-dark"}>
            <div>
            <Link to="/" className="text-light">
                <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo"/>
            </Link> 
            </div>
            <nav>
                <ul className="row mt-4">
                    <li className="col-md-2">
                        <Link to="/"  style={textRed}>Home</Link>
                    </li>
                    <li className="col-md-2">
                        <Link to="about" className="text-light">About</Link>
                    </li>
                    <li className="col-md-2">
                        <a className="text-light">Products</a>
                    </li>
                    <li className="col-md-2">
                        <a className="text-light">Blog</a>
                    </li>
                    <li className="col-md-2">
                        <a className="text-light">Offers</a>
                    </li>
                    <li className="col-md-2">
                        <Link to="contact-us" className="text-light">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;