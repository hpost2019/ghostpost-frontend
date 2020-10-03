import React, { useState } from "react";

import { Button } from 'react-bootstrap'
import axios from 'axios'


function AddPost(){
    const [text, setText] = useState("")
    const [postType, setPostType] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            "text": text,
            "boast": postType,
            "up_vote": 0,
            "down_vote": 0,
            "date_posted": null
        }
        axios.post("http://127.0.0.1:8000/api/posts/", {data})
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
        setText("")
    }
    const handleChange = (event) => {
        setText(event.target.value)
        console.log(text)
    }
    const handleSelectChange = (event) => {
        setPostType(event.target.value)
    }
    return (
        <div className="container-md">
            <form onSubmit={handleSubmit}>
                What do you want to say?<br/>
                    <textarea cols="50" value={text} onChange={(event)=> handleChange(event)} /><br/>
               
                  

                <label>Choose if it's a Roast or Boast:
                    <select value={postType} onChange={handleSelectChange}>
                        <option value={true}>Boast</option>
                        <option value={false}>Roast</option>
                    </select>
                </label><br/>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </form>
        </div>
    )
}

export default AddPost