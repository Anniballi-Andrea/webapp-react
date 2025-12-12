import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

export default function Movie() {

    const [movie, setMovie] = useState()
    const [vote, setVote] = useState()
    const [notFound, setNotFound] = useState(false)
    const { id } = useParams()
    function fatchMovie() {

        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then((res) => {
                setMovie(res.data)
                //console.log(res.data)
                //console.log(res.data.review)
            })
            .catch((err) => {
                console.log(err.message)
                if (err) {
                    setNotFound(true)
                }
            })

    }

    function fatchVote() {
        let voteTemp = []
        if (movie != undefined) {
            //console.log(movie.review)
            movie.review.map(el => { voteTemp.push(el.vote) })
            let totalVote = 0
            //console.log(voteTemp)
            for (let i = 0; i < voteTemp.length; i++) {
                const singleVote = voteTemp[i];

                totalVote = totalVote + singleVote


            }
            const finalVote = (Math.round(totalVote / voteTemp.length))
            setVote(finalVote)


        }





        // console.log(voteTemp)
    }

    function numberToStars(vote) {
        const starsVote = []
        if (movie != undefined) {
            for (let i = 1; i <= 5; i++) {

                if (i <= vote) {
                    starsVote.push(<i key={i} className="bi bi-star-fill stars"></i>)
                } else {
                    starsVote.push(<i key={i} className="bi bi-star stars"></i>)
                }


            }
        }
        return (starsVote)

    }


    //console.log(id)
    useEffect(fatchMovie, [])
    useEffect(fatchVote, [movie])


    //useEffect(() => console.log(movie), [movie])

    return (

        <main>
            <div className="container movie mt-5">

                <div className="row ">
                    {notFound && <PageNotFound />}
                    {movie &&

                        <>

                            <div className="col col-md-4">
                                <img src={`http://localhost:3000/${movie.image}`} alt="" />
                            </div>
                            <div className="col col-md-8">
                                <div className="card">
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
                                </div>
                                <div className="card mt-3">
                                    <div className="card-header">
                                        <h3>Reviews</h3>
                                    </div>
                                    {

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
                                    }
                                </div>


                            </div>

                        </>

                    }

                </div>
            </div>
        </main >

    )
}