import React from "react"
import Trash from "../img/trash.png"
import axios from "axios"
import { Link } from 'react-router-dom'
import { useState } from "react"

export default function Delete(props){
    
    async function handleDelete(postId){
        try {
            console.log(postId)
            const delPost = await axios.delete(`http://localhost:3000/posts/${postId}`)
            props.onDelete()
        } catch (err){
            console.log(err)
        }
        
    }

    return(
        <div className="icon">
            <Link onClick={() => handleDelete(props.id)} to={'/posts'}>
                <img src={Trash} alt="Delete" style={{height: "40px", width: "40px"}} />
            </Link>
        </div>
    )
}