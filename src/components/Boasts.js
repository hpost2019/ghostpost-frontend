import React, { useState, useEffect } from "react";

import { Card, Button } from 'react-bootstrap'
import axios from 'axios';


function Boasts(){
    const [posts, setPosts] = useState([]);
    
    const handle_upvote = (id) => {
        
        axios.post(`http://127.0.0.1:8000/api/posts/${id}/up_vote/`)
        .then((res) => console.log(res.data))
       
    }
    const handle_downvote = (id) => {
        
        axios.post(`http://127.0.0.1:8000/api/posts/${id}/down_vote/`)
        .then((res) => console.log(res.data))
        
    }
    useEffect(() => {
        
        axios.get("http://127.0.0.1:8000/api/posts/boasts_only/")
        .then((res) => setPosts(res.data))
        
    }, []);
    return (
        <div className="container-md">
            {posts.map((post) => (
                <Card style={{ width: '25rem' }} key={post.id}>
                <Card.Body>
                  <Card.Title>{post.boast ? 'Boast' : 'Roast'}</Card.Title>
                  
                  <Card.Text>
                    {post.text} <br/>
                    Posted Date: {post.post_date} <br/>
                    Up Votes: {post.up_votes} <br/>
                    Down Votes: {post.down_votes} <br/>
                    Total Score: {post.score} <br/>
                  </Card.Text>
                  <Button 
                    variant="success" 
                    as="input" 
                    type="button"
                    onClick={() => handle_upvote(post.id)}
                    value="Up Vote" />
                    <Button 
                    variant="danger" 
                    as="input" 
                    type="button"
                    onClick={() => handle_downvote(post.id)}
                    value="Down Vote" />
                </Card.Body>
              </Card>
            )

            )}
        </div>)
}

export default Boasts