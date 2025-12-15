import { Link } from "react-router-dom";


export default function HomePage() {



    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">MovieDB</h1>
                    <p className="col-md-8 fs-4">
                        Welcome to my site. An experiment born from a <Link to={"https://boolean.careers/"}> Boolean</Link> exercise.</p>
                    <p className="col-md-8 fs-4">
                        Press the button below to see all the movies in the archive.</p>

                    <button className="btn btn-primary btn-lg" type="button">
                        <Link className="no_link text-light" to={'/movies'}> Movies </Link>
                    </button>
                </div>
            </div>

            <div className="container"></div>
        </>
    )
}
