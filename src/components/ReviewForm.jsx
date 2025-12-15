import axios from "axios"
import { useEffect, useState } from "react"

export default function ReviewForm({ movieId, fatchMovie }) {



    const initialFormData =
    {
        name: "",
        text: "",
        vote: "5"
    }


    const [formData, setFormData] = useState(initialFormData)
    const [reload, setReload] = useState()

    function handleReview(e) {
        e.preventDefault()
        console.log(formData)
        axios.post(`http://localhost:3000/api/movies/${movieId}/review`, formData)
            .then((response) => {
                console.log("submit succesful", response.data)
                setFormData(initialFormData)
                setReload(response.data)
            })
            .catch((error) => {
                console.log("error submitting", error)
            })

    }

    useEffect(fatchMovie, [reload])

    return (


        <form onSubmit={handleReview}>
            <div className="mb-3 px-4" >
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="name"
                    aria-describedby="nameHelper"
                    value={formData.name}
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <small id="nameHelper" className="form-text text-muted">insert your name</small>
            </div>

            <div className="mb-3 px-4">
                <label htmlFor="vote" className="form-label">your vote</label>
                <select
                    className="form-select"
                    name="vote"
                    id="vote"
                    value={formData.vote}

                    onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>



            <div className="mb-3 px-4">
                <label htmlFor="text" className="form-label">Review</label>
                <textarea
                    className="form-control"
                    name="text"
                    id="text"
                    rows="3"
                    placeholder="insert your review here..."
                    required
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}

                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mx-4 mb-2">confirm</button>
        </form>
    )
}