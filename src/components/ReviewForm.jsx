import axios from "axios"
import { useState } from "react"

export default function ReviewForm() {

    const initialFormData =
    {
        name: "",
        text: "",
        vote: ""
    }


    const [formData, setFormData] = useState(initialFormData)

    function handleReview(e) {
        e.preventDefault()
        console.log(formData)

    }

    return (


        <form onSubmit={handleReview}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="name"
                    aria-describedby="nameHelper"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <small id="nameHelper" className="form-text text-muted">insert your name</small>
            </div>

            <div className="mb-3">
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


            <div className="mb-3">
                <label htmlFor="text" className="form-label">Review</label>
                <textarea
                    className="form-control"
                    name="text"
                    id="text"
                    rows="3"
                    placeholder="insert your review here..."
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}

                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">confirm</button>
        </form>
    )
}