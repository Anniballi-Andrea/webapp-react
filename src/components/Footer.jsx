import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div className="contaniter d-flex justify-content-around">
            <div>
                <ul>
                    <li className="unstyled">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="unstyled">
                        <Link to="/About_Us">About Us</Link>
                    </li>

                </ul>
            </div>
            <div>
                <ul>
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
    )
}