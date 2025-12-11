import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer>
            <div className="contaniter d-flex justify-content-around pt-4">
                <div>
                    <ul className="list-unstyled">
                        <li><h5>About Us:</h5></li>

                        <li className="unstyled">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="unstyled">
                            <Link to="/About_Us">About Us</Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <ul className="list-unstyled">
                        <li><h5>About Us:</h5></li>
                        <li className="unstyled">
                            <Link to="/">Terms of police</Link>
                        </li>
                        <li className="unstyled">
                            <Link to="/About_Us">social</Link>
                        </li>
                        <li className="unstyled">
                            <Link to="/">lorem</Link>
                        </li>
                        <li className="unstyled">
                            <Link to="/About_Us">lorem</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}