import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Blog(props){
    const oneTag = (post) => post.tags.map(tag => {
                return (
                    <li style={{listStyleType:"none", display:"inline-block", margin: "0 5px", color: "gray"}}>{tag}</li>
                )
            })

    const renderPosts = props.posts.map((post, index) => {
        return (
            <div key={index} style={{marginBottom: "50px"}}>
                <p style={{fontSize: "14px", textAlign: "right"}}>{post.created}</p>
                <p><a href={`/posts/${post.id}`} style={{textDecoration:"none", color:"black"}}>{post.title}</a></p>
                <ul style={{paddingLeft:"0px"}}>{ oneTag(post) }</ul>
                <p><ReactMarkdown>{post.content}</ReactMarkdown></p>
                <hr style={{marginTop: "65px", width: "50px"}}/>
            </div>
        )
    })

    return (
        <div style={{margin: "0 auto", width: "400px"}}>
            {renderPosts}
        </div>
    )
}