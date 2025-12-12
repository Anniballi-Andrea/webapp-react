import { useEffect, useState } from "react"
import axios from "axios"
import { Link, } from "react-router-dom"


export default function Movies() {

    const [movies, setMovies] = useState([])


    function fatchMovies() {

        axios.get('http://localhost:3000/api/movies')
            .then((res) => {
                setMovies(res.data)

            })
            .catch((err) => {
                console.log(err.message)

            })

    }

    useEffect(fatchMovies, [])
    // useEffect(() => console.log(movies), [movies])

    return (
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                    {
                        movies.map(el => (
                            <div key={el.id} className="col g-3">
                                <Link className="no_link" to={`/movies/${el.id}`}>

                                    <div className="card">

                                        <div className="card-header" >
                                            <img src={`http://localhost:3000/${el.image}`} alt="a film ver image" />
                                        </div>
                                        <div className="card-body">
                                            <h4>{el.title}</h4>
                                            <p>{el.genre}</p>
                                            <p>{el.abstract}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        ))
                    }
                </div >
            </div >
        </main >

    )
}