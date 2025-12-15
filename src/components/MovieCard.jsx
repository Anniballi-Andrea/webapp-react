
import MovieInfo from "./MovieInfo";
import MovieReview from "./MovieReview";

export default function MovieCard({ movie, numberToStars, vote, }) {



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

                <form >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="name"
                            aria-describedby="nameHelper"
                        />
                        <small id="nameHelper" className="form-text text-muted">insert your name</small>
                    </div>

                    <div class="mb-3">
                        <label htmlFor="vote" class="form-label">your vote</label>
                        <select
                            class="form-select"
                            name="vote"
                            id="vote"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="review" className="form-label">Review</label>
                        <textarea className="form-control" name="" id="" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">confirm</button>
                </form>
            </div>

        </>
    )
}