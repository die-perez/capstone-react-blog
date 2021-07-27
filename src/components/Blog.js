import React, { useEffect, useState } from "react"
import axios from 'axios'

export default function Blog(){
    // state holding blog posts
    const [posts, setPosts] = useState([])
    
    async function fetchPosts(){
        try {
            const url = `http://localhost:3000/posts`
            const response = await axios.get(url)
            let responseData = (response.data.posts)
            console.log(responseData)

            // set state
            setPosts(responseData)

        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const renderPosts = posts.map((post, index) => {
        return (
            <div key={index}>
                <p>{post.created}</p>
                <p><a href={`/posts/${post.id}`} style={{textDecoration:"none", color:"black"}}>{post.title}</a></p>
                <p>{post.content}</p>
            </div>
        )
    })

    return (
        <div>
            {renderPosts}

        </div>
    )

}