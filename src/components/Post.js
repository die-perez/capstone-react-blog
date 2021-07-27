import React from 'react'
import Delete from './Delete'
import ReactMarkdown from 'react-markdown'
import '../App.css'

export default function Post(props) {
    console.log(props)
    const oneTag = props.tags.map(tag => {
        return (
            <li style={{listStyleType:"none", display:"inline-block", margin: "0 5px"}}>{tag}</li>
        )
    })

    return (
        <div style={{margin: "0 auto", width: "400px"}}>
            <p>{ props.title }</p>
            <p>{props.created}</p>
            <ul style={{paddingLeft:"0px"}}>{ oneTag }</ul>
            <p><ReactMarkdown>{props.content}</ReactMarkdown></p>
            <div>
                <Delete {...props} />
            </div>
        </div>
    )
}
