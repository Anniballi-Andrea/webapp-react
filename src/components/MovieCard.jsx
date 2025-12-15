
import MovieInfo from "./MovieInfo";
import MovieReview from "./MovieReview";
import ReviewForm from "./reviewForm";

export default function MovieCard({ movie, numberToStars, vote, movieId }) {



    return (
        <>

            <div className="col col-md-4">
                <img src={`http://localhost:3000/${movie.image}`} alt="" />
            </div>
            <div className="col col-md-8">
                <div className="card">
                    <MovieInfo movie={movie} vote={vote} numberToStars={numberToStars} />
                </div>
                <div className="card mt-3">
                    <div className="card-header">
                        <h3>Reviews</h3>
                    </div>

                    <MovieReview movie={movie} numberToStars={numberToStars} />
                </div>


            </div>
            <div className="col-12">
                <h3>Leave your review</h3>

                <ReviewForm movieId={movieId} />
            </div>

        </>
    )
}