import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Modal } from 'react-bootstrap'
import '../App.css'
import { useState, useEffect } from 'react'

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
            
            console.log('💀',response)
        } catch (error) {
            console.log(error)
        }
        props.onHide()  
        props.refreshPosts()
    }

    return(
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    New post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label style={{marginTop:"5px"}}>Title</Form.Label>
                    <Form.Control type="email" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title}/>
                    <Form.Label style={{marginTop:"5px"}}>Tags</Form.Label>
                    <Form.Control type="email" placeholder="ex: magic, tarot, morticia" onChange={e => setTags(e.target.value)} value={tags} />
                    <Form.Label style={{marginTop:"5px"}}>Textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={e => setContent(e.target.value)} value={content}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={submitPost} variant="dark" type="submit">submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}