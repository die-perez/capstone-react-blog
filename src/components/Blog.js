import React from 'react'

export default function Blog(props){
    const oneTag = (post) => post.tags.map(tag => {
                return (
                    <li style={{listStyleType:"none", display:"inline-block", margin: "0 5px"}}>{tag}</li>
                )
            })

    const renderPosts = props.posts.map((post, index) => {
        return (
            <div key={index}>
                <p>{post.created}</p>
                <p><a href={`/posts/${post.id}`} style={{textDecoration:"none", color:"black"}}>{post.title}</a></p>
                <ul style={{paddingLeft:"0px"}}>{ oneTag(post) }</ul>
                <p>{post.content}</p>
            </div>
        )
    })

    return (
        <div style={{margin: "0 auto", width: "400px"}}>
            {renderPosts}
        </div>
    )
}