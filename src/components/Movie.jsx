import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Movie() {

    const [movie, setMovie] = useState()
    const { id } = useParams()
    function fatchMovie() {

        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then((res) => {
                setMovie(res.data)
                console.log(res.data)
                //console.log(res.data.review)
            })
            .catch((err) => console.log(err.message))

    }
    //console.log(id)
    useEffect(fatchMovie, [])
    //useEffect(() => console.log(movie), [movie])

    return (

        <main>
            <div className="container">
                <div className="row cols-1 cols-md-2">
                    {movie &&

                        <>
                            <div className="col">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>{movie.title}</h2>
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                {movie.genre}
                                            </li>
                                            <li>
                                                {movie.release_year}
                                            </li>
                                            <li>
                                                {movie.director}

                                            </li>
                                            <li>
                                                {movie.abstract}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={`http://localhost:3000/${movie.image}`} alt="" />
                                </div>
                            </div>
                            <div className="col-12">
                                {

                                    movie.review.map((el) => (
                                        <div className="card">
                                            <div>
                                                Name: {el.name}
                                            </div>
                                            <div>
                                                Review:{el.review}
                                            </div>
                                            <div>
                                                Vote:{el.vote}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>

                    }

                </div>
            </div>
        </main>

    )
}