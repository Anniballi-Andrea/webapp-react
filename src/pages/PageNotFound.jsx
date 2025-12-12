import { Link } from "react-router-dom";

export default function PageNotFound() {

    return (
        <div className="container d-flex justify-content-center">
            <div>
                <h1>404 PAGE NOT FOUND</h1>
                <p>please return to <Link to={'/'}>Home Page</Link></p>
            </div>
        </div>
    )
}