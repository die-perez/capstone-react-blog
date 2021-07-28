import Snake from '../img/snake.png'
import Add from '../img/add.png'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddPost from './AddPost'

export default function Header(){
    const [modalShow, setModalShow] = useState(false)
    const handleClose = () => setModalShow(false);
    

    return(
        <div>
            <img src={Snake} alt="snake" />
            <p>welcome</p>
            <Button onClick={() => setModalShow(true)} style ={{backgroundColor: "white", border: "none"}}>
                <img src={Add} alt="add" style={{width:"100px", height:"100px"}} />
            </Button>
            <AddPost
                show={modalShow}
                onHide={handleClose}
            />
        </div>
    )
}