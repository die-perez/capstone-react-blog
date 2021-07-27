import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'

import { useState } from 'react'

export default function AddPost(props){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [tags, setTags] = useState('')


    const submitPost = async (e) => {
        try {
            e.preventDefault()
            const requestBody = {
                title: title,
                content: content,
                tags: tags.split(',')
            }
            const response = await axios.post(`http://localhost:3000/posts`, requestBody)
            props.onSubmit()
            console.log('💀',response)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Form style={{margin: "0 auto", width: "350px"}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="email" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tags</Form.Label>
                <Form.Control type="email" placeholder="Tags" onChange={e => setTags(e.target.value)} value={tags} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Textarea</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={e => setContent(e.target.value)} value={content}/>
            </Form.Group>
            <Button variant="dark" type="submit" onClick={submitPost}>
                Submit
            </Button>
        </Form>
    )
}