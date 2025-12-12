export default function MovieReview({ movie, numberToStars }) {

    return (
        movie.review.map((el) => (
            <div key={el.review_id} className="my-2 px-3 pt-3">
                <div>
                    <span className="bold">Name: </span>{el.name}
                </div>
                <div>
                    <span className="bold">Review: </span>{el.review}
                </div>
                <div className="d-flex justify-content-end px-5">

                    <span className="">
                        {
                            numberToStars(el.vote)
                        }
                    </span>
                </div>
            </div>
        ))
    )
}