import { useEffect, useState } from "react"
import axios from "axios"

export default function HomePage() {

    const [movies, setMovies] = useState([])

    function fatchMovies() {

        axios.get('http://localhost:3000/api/movies')
            .then((res) => {
                setMovies(res.data)

            })
            .catch((err) => console.log(err.message))

    }

    useEffect(fatchMovies, [])
    // useEffect(() => console.log(movies), [movies])

    return (
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                    {
                        movies.map(el => (
                            <div className="col g-3">
                                <div className="card">
                                    <div div className="card-header" >
                                        <img src={`http://localhost:3000/${el.image}`} alt="a film ver image" />
                                    </div>
                                    <div className="card-body">
                                        <h4>{el.title}</h4>
                                        <p>{el.genre}</p>
                                        <p>{el.abstract}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div >
            </div >
        </main >

    )
}