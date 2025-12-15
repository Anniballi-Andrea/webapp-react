import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import MovieCard from "../components/MovieCard";

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
                //console.log(res.data.id)
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


        <div className="container movie mt-5">

            <div className="row ">
                {notFound && <PageNotFound />}
                {movie && <MovieCard movie={movie} numberToStars={numberToStars} vote={vote} />



                }

            </div>
        </div>


    )
}