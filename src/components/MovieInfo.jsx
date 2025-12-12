export default function MovieInfo({ movie, numberToStars, vote }) {

    return (
        <>
            <div className="card-header"><h3> {movie.title}</h3></div>
            <div className="card-body">
                <ul>
                    <li>
                        <span className="bold">Genre: </span>{movie.title}
                    </li>
                    <li>
                        <span className="bold">Release year: </span>{movie.release_year}
                    </li>
                    <li>
                        <span className="bold">Director: </span>{movie.director}
                    </li>
                    <li>
                        <span className="bold">description: </span>{movie.abstract}
                    </li>
                    <div className="d-flex justify-content-end px-5 ">
                        {
                            numberToStars(vote)
                        }
                    </div>
                </ul>
            </div>
        </>
    )
}